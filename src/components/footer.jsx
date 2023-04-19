import React from "react";
// styles
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2 className={styles.footerTitle}>株式会社クラシコ</h2>
        <div className={styles.footerContents}>
          <div className={styles.coInfo}>
            <p className={styles.time}>
              営業時間：9:00 ~ 18:00{" "}
              <span className={styles.inlineBlock}>定休日：毎週日曜、水曜</span>
            </p>
            <p className={styles.address}>
              〒340-0022<br></br>埼玉県草加市瀬崎1-9-1<br></br>
              谷塚コリーナ・ライオンズタワー谷塚301C
            </p>
            <p>Tel：048-961-8036 Fax：048-961-8046</p>
          </div>
          <div className={styles.footerLink}>
            <Link href="/">ホーム</Link>
            <Link href="/about">会社情報</Link>
            <Link href="/renovate">リノベーションする</Link>
            <Link href="/works">施工事例</Link>
            <Link href="/access">アクセス</Link>
            <Link href="/recruit">採用情報</Link>
            <Link href="/contact">お問合せ</Link>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
            <small className={styles.copyright}>2020 @ classico co.,Ltd.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
