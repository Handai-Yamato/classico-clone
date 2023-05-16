import React from "react";
// component
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/Thanks.module.scss";

const Thanks = () => {
  return (
    <NestedLayout
      title="お問い合わせありがとうございます"
      pageName="お問い合わせありがとうございます"
    >
      <div className={styles.sectionContainer}>
        <h3 className={styles.title}>お問い合わせを受け付けました。</h3>
        <p className={styles.text}>
          ご記入いただいた情報は無事送信されました。
          <br />
          確認のためお客様へ自動返信メールをお送りさせていただきました。
          <br />
          お問い合わせ頂き、ありがとうございました。
        </p>
      </div>
    </NestedLayout>
  );
};

export default Thanks;
