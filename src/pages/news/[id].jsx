import { client } from "../../../lib/client";
// component
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/blog/Id.module.scss";

// 事前に生成するためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: false };
};

// publishedAtを西暦 + 月 + 日 +にする
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
};

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  // フォーマットされた日付を取得
  const formattedDate = formatDate(data.publishedAt);

  return {
    props: {
      news: {
        ...data,
        formattedDate, // フォーマットされた日付を追加
      },
    },
  };
};

export default function WorksId({ news }) {
  return (
    <NestedLayout title="お知らせ" pageName={news.title}>
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          <p className={styles.date}>{news.formattedDate}</p>
          <h1 className={styles.title}>{news.title}</h1>
          <div className={styles.body} dangerouslySetInnerHTML={{ __html: `${news.content}` }} />
        </div>
      </div>
    </NestedLayout>
  );
}
