import Link from "next/link";
import Image from "next/image";
// library
import { client } from "../../lib/client";
// styles
import styles from "@/styles/Home.module.scss";
// component
import { PrimaryButtonSmall, SecondaryButton } from "@/components/button";
// image
import hero from "../../public/image_home_hero.jpg";

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
    <>
      <div className={styles.heroContainer}>
        <Image src={hero} alt="メインビジュアル" className={styles.heroImage} priority />
      </div>

      <div className={styles.heroContents}>
        <Image
          src="/logo.svg"
          alt="Logo"
          className={styles.heroLogo}
          width={123}
          height={27}
          priority
        />
        <p className={styles.heroText}>
          住みやすさと品質にこだわった<span>クラシコのリノベーションで</span>
          <br></br>快適な価値ある生活を
        </p>
      </div>
      <div className={styles.aboutButton}>
        <PrimaryButtonSmall href="/about" text="会社情報はこちら" />
      </div>

      {/* Works section */}
      <section className={styles.worksSection}>
        <div className={styles.sectionContainer}>
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
                      width={1280}
                      height={960}
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
        </div>

        <div className={styles.moreButton}>
          <SecondaryButton href="/works" text="もっとみる" />
        </div>
      </section>

      {/* News section */}
      <section className={styles.newsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            News<span>お知らせ</span>
          </h2>
          <ul className={styles.newsList}>
            {news.slice(0, 4).map((article) => (
              <li key={article.id} className={styles.newsItem}>
                <span className={styles.newsDate}>
                  {new Date(article.publishedAt)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </span>
                <Link href={`/news/${article.id}`}>
                  <h3 className={styles.newsTitle}>{article.title}</h3>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.moreButton}>
            <SecondaryButton href="/news" text="もっとみる" />
          </div>
        </div>
      </section>

      {/* Access section */}
      <section className={styles.accessSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Access<span>アクセス</span>
          </h2>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.416062119655!2d139.79982764112077!3d35.814266322767224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189108bf088199%3A0x8e87dcbd1f58701d!2z44Op44Kk44Kq44Oz44K644K_44Ov44O86LC35aGa!5e0!3m2!1sja!2sjp!4v1681796649453!5m2!1sja!2sjp"
              loading="lazy"
              width="100%"
              height={480}
              allowFullScreen={true}
              referrerPolicy="no-referrer"
            ></iframe>
          </div>

          <div className={styles.moreButton}>
            <SecondaryButton href="/access" text="詳しい行き方はこちら" />
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className={styles.infoSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.infoContents}>
            <Link className={styles.coInfo} href="/about">
              <Image src="/icon_home_co.svg" alt="企業情報" width={28} height={28} />
              企業情報
            </Link>

            <Link className={styles.recruitInfo} href="/recruit">
              <Image src="/icon_home_recruit.svg" alt="採用情報" width={28} height={28} />
              採用情報
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
