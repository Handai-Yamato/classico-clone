import React from "react";
// component
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/Access.module.scss";
import BreadCrumbs from "@/components/breadCrumbs";

const Access = () => {
  return (
    <NestedLayout title="アクセス" pageName="アクセス">
      <div className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>
          Access<span>会社情報</span>
        </h2>
      </div>

      <BreadCrumbs pageName="アクセス" />

      <section>
        <div className={styles.sectionContainer}>
          <h3 className={styles.title}>電車をご利用の方</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              1. 谷塚駅東口に出てください。出ていただくと正面にロータリが見えます。
            </li>
            <li className={styles.item}>2. ロータリを左手の方に道なりにお進みください。</li>
            <li className={styles.item}>
              3. さらに道なりに進むとダイソーの看板が見えます。そのままお進みください。
            </li>
            <li className={styles.item}>4. ロータリに沿って道なりにお進みください。</li>
            <li className={styles.item}>
              5. 左手側の建物の角を道なりに曲がり、さらに30mほど進むと当社入り口になります。
            </li>
            <li className={styles.item}>6. インターフォンで「113」を押して呼び出します。</li>
          </ul>
        </div>
      </section>
    </NestedLayout>
  );
};

export default Access;
