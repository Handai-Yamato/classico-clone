import Link from "next/link";
import Image from "next/image";
// library
import { client } from "../../lib/client";
// component
import NestedLayout from "@/components/layout/nested-layout";
import BreadCrumbs from "@/components/breadCrumbs";
import { SecondaryButton } from "@/components/button";
// styles
import styles from "@/styles/About.module.scss";
import Access from "@/components/access";

// SSG
export const getStaticProps = async () => {
  const worksData = await client.get({ endpoint: "works" });

  return {
    props: {
      works: worksData.contents,
    },
  };
};

const about = ({ works }) => {
  return (
    <NestedLayout title="会社情報" pageName="会社情報">
      <div className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>
          About<span>会社情報</span>
        </h2>
      </div>
      <BreadCrumbs pageName="会社情報" className={styles.breadCrumbs} />

      {/* Business section */}
      <section className={styles.businessSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Business<span>事業内容</span>
          </h2>

          <div className={styles.businessContent}>
            <div className={styles.businessItem}>
              <h3 className={styles.businessTitle}>居住用不動産の買取再販事業</h3>
              <p className={styles.businessText}>
                不動産仲介会社等との情報交換により買取物件の情報を収集し、現地調査等を行ったうえで、速やかに買取りの可否や価格を決定します。
                買取った物件は、高品質かつ時代に合った設備を備えた物件へリフォーム工事を施したうえで、販売しております。
              </p>
            </div>
            <div className={styles.businessItem}>
              <h3 className={styles.businessTitle}>投資用不動産の買取再販事業</h3>
              <p className={styles.businessText}>
                賃貸マンション、アパート、ビル等を買取、バリューアップ（内外装リフォーム工事、リーシング業務）を行ったうえで、個人投資家や中小企業向けに再販します。
              </p>
            </div>
            <div className={styles.businessItem}>
              <h3 className={styles.businessTitle}>リノベーション事業</h3>
              <p className={styles.businessText}>
                当社の中古マンションリノベーション物件はお手頃な価格で理想の家をご提供いたします。
                住みやすさと品質にこだわったクラシコのリノベーションで快適な価値ある生活をお過ごしください。
              </p>
              <Link href="/renovate" className={styles.businessLink}>
                リノベーションについてはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company section */}
      <section className={styles.companySection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Company<span>会社概要</span>
          </h2>

          <div className={styles.companyContent}>
            <table className={styles.companyTable}>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>株式会社クラシコ</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>
                    〒340-0022<br></br>埼玉県草加市瀬崎1-9-1 谷塚コリーナ・ライオンズタワ
                  </td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>代表取締役 渡邊 一</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>400万円</td>
                </tr>
                <tr>
                  <th>決算月</th>
                  <td>５月</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    居住用、投資用不動産の買取再販事業<br></br>不動産の売買及び仲介<br></br>
                    リフォーム工事業
                  </td>
                </tr>
                <tr>
                  <th>会免許番号</th>
                  <td>
                    宅地建物取引業 埼玉県(2)第23278号<br></br>一般建設業許可
                    埼玉県知事許可（般-4）第75750号
                  </td>
                </tr>
                <tr>
                  <th>所属団体</th>
                  <td>
                    公益社団法人 全日本不動産協会<br></br>公益社団法人 全日本保証協会
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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

          <div className={styles.moreButton}>
            <SecondaryButton href="/works" text="もっとみる" />
          </div>
        </div>
      </section>

      <Access />
    </NestedLayout>
  );
};

export default about;
