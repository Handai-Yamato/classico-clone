import React from "react";
import Image from "next/image";
// component
import { PrimaryButtonLarge } from "./button";
// styles
import styles from "@/styles/components/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>
          メールでのお問合せ・ご相談は下記のフォームにご記入下さい。<br></br>
          内容を確認後、メールにてお返事させて頂きます。<br></br>
          メールの確認作業に時間を要する場合がございますので、
          <span>お急ぎのお客様はお電話にてお問い合わせ頂くことをおすすめいたします。</span>
        </p>

        <div className={styles.button}>
          <PrimaryButtonLarge href="contact" text="お問い合わせフォームへ" />
        </div>

        <div className={styles.tel}>
          <Image src="/icon_tel.svg" alt="" width={45} height={45} />
          <a href="tel:048-961-8036">048-961-8036</a>
        </div>
      </div>
    </>
  );
}
