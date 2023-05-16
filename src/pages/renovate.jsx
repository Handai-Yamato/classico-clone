import React from "react";
import Image from "next/image";
// component
import NestedLayout from "@/components/layout/nested-layout";
import BreadCrumbs from "@/components/breadCrumbs";
// styles
import styles from "@/styles/Renovate.module.scss";

const renovate = () => {
  return (
    <NestedLayout title="リノベーション" pageName="リノベーション">
      <div className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>
          Renovate<span>リノベーション</span>
        </h2>
      </div>

      <BreadCrumbs pageName="リノベーション" />

      <section>
        <div className={styles.sectionContainer}>
          <h3 className={styles.topMessage}>
            クラシコでは、プランニングから施工、検査、
            <span>アフターサービスまで、すべて自社で行っているから安心。</span>
            <br></br>
            全体の流れを把握して、<span>スムーズなリノベーションを計画していきましょう！</span>
          </h3>

          <div className={styles.stepContainer}>
            {/* Step1〜3 */}
            <div className={styles.summary}>
              <div>
                <span>Step1 ~ Step3まで無料（１ヶ月）</span>
                ※現地調査後のお打ち合わせ4回目以降のプラン変更は有料とさせていただきます。
              </div>
            </div>

            <ul className={styles.stepList}>
              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step1</p>
                  <Image src="/icon_step1.svg" alt="" width={60} height={73} />
                </div>

                <h4>無料相談</h4>

                <div className={styles.stepText}>
                  <p>
                    まずはお問い合わせください。個別相談や、完成物件見学のご案内をさせていただきます。暮らしのイメージや、ご予算、工事の期間など、じっくりとお聞かせください。
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step2</p>
                  <Image src="/icon_step2.svg" alt="" width={60} height={73} />
                </div>

                <h4>現地調査</h4>

                <div className={styles.stepText}>
                  <p>
                    現地にてプランニングに必要な現況の確認や採寸を行い、写真を撮らせていただきます。
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step3</p>
                  <Image src="/icon_step3.svg" alt="" width={60} height={73} />
                </div>

                <h4>プランニング・お見積もり</h4>

                <div className={styles.stepText}>
                  <p>
                    お聞きした内容を元に、最適なプランのご提案と、 お見積もりを作成します。
                    仕様やプランを一つひとつご検討いただきながら、話を詰めていきます。
                  </p>
                </div>
              </li>
            </ul>

            <div className={styles.imgFree}>
              <Image src="/text_step-free.svg" width={1280} height={85} />
            </div>

            <p className={styles.annotation}>
              ※現地調査後のお打ち合わせ4回目以降のプラン変更は有料とさせていただきます。
            </p>

            <div className={styles.img1month}>
              <Image src="/text_step-1month.svg" width={1280} height={85} />
            </div>

            {/* Step4〜6 */}
            <div className={styles.summary}>
              <div>
                <span>Step4 ~ Step5まで無料</span>
                ※ご契約の際、工事申請に２〜３週間ほどかかります。<br></br>
                ※また工事開始〜完成・お引き渡しで約２ヶ月ほどかかります。
              </div>
            </div>

            <ul className={styles.stepList}>
              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step4</p>
                  <Image src="/icon_step4.svg" alt="" width={60} height={73} />
                </div>

                <h4>ご契約</h4>

                <div className={styles.stepText}>
                  <p>
                    最終的なお見積もり、 プランにご納得いただいてから、 ご契約となります。
                    ご契約後に管理組合への工事許可申請を行います。
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step5</p>
                  <Image src="/icon_step5.svg" alt="" width={60} height={73} />
                </div>

                <h4>工事開始</h4>

                <div className={styles.stepText}>
                  <p>
                    近隣へのご挨拶を経て、工事が始まります。 ご契約どおりに進んでいるか、
                    グループ一貫体制で責任を持って、 現場を管理します。
                  </p>
                </div>
              </li>

              <li className={styles.stepItem}>
                <div className={styles.stepImage}>
                  <p>Step1</p>
                  <Image src="/icon_step6.svg" alt="" width={60} height={73} />
                </div>

                <h4>完成・お引き渡し</h4>

                <div className={styles.stepText}>
                  <p>
                    厳しい検査をクリアしてから、 現地にてお客様に立会い確認をしていただき、
                    お引き渡しとなります。
                  </p>
                </div>
              </li>
            </ul>

            <div className={styles.imgApplication}>
              <div>
                <Image src="/text_step-sinsei.svg" alt="" width={416} height={94} />
              </div>

              <div>
                <Image src="/text_step-2month.svg" alt="" width={832} height={92} />
              </div>
            </div>

            <div className={styles.summaryAnnounce}>
              <div>
                <span>お引き渡しまで約4ヵ月</span>
                ※構造上の問題や施工状況により、工事期間は前後する場合があります。
              </div>
            </div>
          </div>
        </div>
      </section>
    </NestedLayout>
  );
};

export default renovate;
