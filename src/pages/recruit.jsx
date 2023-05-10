import React from "react";
// component
import { PrimaryButtonLarge } from "@/components/button";
import BreadCrumbs from "@/components/breadCrumbs";
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/Recruit.module.scss";

const Recruit = () => {
  return (
    <NestedLayout title="採用情報" pageName="採用情報">
      <div className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>
          Recruit<span>採用情報</span>
        </h2>
      </div>
      <BreadCrumbs pageName="採用情報" />

      <section>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Recruitment Guidelines<span>募集要項</span>
          </h2>

          <div className={styles.guidelines}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>職種</th>
                  <td>施工管理・営業</td>
                </tr>
                <tr>
                  <th>業務内容</th>
                  <td>
                    施工管理<br></br>内装デザインの企画及び施工管理等<br></br>営業<br></br>
                    区分マンションの仕入及び売却企画等
                  </td>
                </tr>
                <tr>
                  <th>待遇・福利厚生</th>
                  <td>
                    ■交通費規定支給<br></br>■昇給あり<br></br>■賞与/年2回(業績による)<br></br>
                    ■有給休暇<br></br>■社会保険完備<br></br>■試用期間3ヶ月(同条件)
                  </td>
                </tr>
                <tr>
                  <th>交通費</th>
                  <td>規定支給</td>
                </tr>
                <tr>
                  <th>勤務地</th>
                  <td>
                    株式会社クラシコ<br></br>埼玉県 草加市瀬崎1丁目9-1 (勤務地)
                  </td>
                </tr>
                <tr>
                  <th>アクセス</th>
                  <td>「谷塚駅」徒歩2分</td>
                </tr>
                <tr>
                  <th>応募資格</th>
                  <td>
                    □高卒以上<br></br>□業界・職種経験不問<br></br>□要普通運転免許<br></br>
                    □若手応援！
                  </td>
                </tr>
                <tr>
                  <th>勤務時間</th>
                  <td>9:00～18:00 休憩時間 1時間(実働8h)</td>
                </tr>
                <tr>
                  <th>休日休暇</th>
                  <td>
                    【年間休日123日】<br></br>完全週休二日制(水・日・祝)<br></br>
                    ＧＷ・夏季・年末年始休暇
                  </td>
                </tr>
                <tr>
                  <th>勤務期間</th>
                  <td>
                    最低勤務日数：週5日<br></br>最低勤務時間：1日8時間
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={styles.button}>
              <PrimaryButtonLarge href="tel: 048-961-8036" text="まずはお電話ください" />
            </div>
          </div>
        </div>
      </section>
    </NestedLayout>
  );
};

export default Recruit;
