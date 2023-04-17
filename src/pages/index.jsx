import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
// library
import { client } from "../../lib/client";
// styles
import styles from "@/styles/Home.module.scss";
// component
import NestedLayout from "@/components/layout/nested-layout";
import { PrimaryButtonSmall, SecondaryButton } from "@/components/button";
// image
import hero from "../../public/image_home_hero.jpg";

const inter = Inter({ subsets: ["latin"] });

// SSG
export const getStaticProps = async () => {
  const worksData = await client.get({ endpoint: "works" });
  const newsData = await client.get({ endpoint: "news" });

  return {
    props: {
      works: worksData.contents,
      news: newsData.contents,
    },
  };
};

export default function Home({ works, news }) {
  return (
    <NestedLayout>
      <div className={styles.heroContainer}>
        <Image src={hero} alt="メインビジュアル" className={styles.heroImage} />
      </div>

      <div className={styles.heroContents}>
        <Image src="/logo.svg" alt="Logo" className={styles.heroLogo} fill />
        <p className={styles.heroText}>
          住みやすさと品質にこだわった<span>クラシコのリノベーションで</span>
          <br></br>快適な価値ある生活を
        </p>
      </div>
      <div className={styles.aboutButton}>
        <PrimaryButtonSmall href="/about" text="会社情報はこちら" />
      </div>

      {/* Works section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Works<span>施工事例</span>
        </h2>
        <ul className={styles.worksList}>
          {works.slice(0, 4).map((work) => (
            <li className={styles.worksItem} key={work.id}>
              <Link href={`/works/${work.id}`}>
                {work.thumbnail && (
                  <Image
                    src={work.thumbnail.url}
                    alt={work.title}
                    className={styles.worksThumbnail}
                  />
                )}
                <div className={styles.worksTextContainer}>
                  <h3 className={styles.worksTitle}>{work.title}</h3>
                  <div
                    className={styles.worksDescription}
                    dangerouslySetInnerHTML={{ __html: `${work.description}` }}
                  />
                  <p className={styles.worksDate}>
                    {new Date(work.publishedAt)
                      .toLocaleDateString("ja-JP", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })
                      .replace(/\//g, ".")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.moreButton}>
          <SecondaryButton href="/works" text="もっとみる" />
        </div>
      </section>

      {/* News section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          News<span>お知らせ</span>
        </h2>
        <ul className={styles.newsList}>
          {news.slice(0, 4).map((article) => (
            <li key={news.id} className={styles.newsItem}>
              <Link href={`/news/${article.id}`}>
                <h3 className={styles.newsTitle}>{article.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Access section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Access<span>アクセス</span>
        </h2>
      </section>

      {/* About & Recruit link section */}
      <section className={styles.sectionContainer}></section>
    </NestedLayout>
  );
}
