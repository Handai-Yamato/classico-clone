import React, { useRef } from "react";
// component
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/Contact.module.scss";
import buttonStyles from "@/styles/components/Button.module.scss";
import Link from "next/link";

export default function Contact() {
  const nameRef = useRef(null);
  const kanaRef = useRef(null);
  const telRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      kana: kanaRef.current?.value,
      tel: telRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      // 送信完了後に遷移するページへのURL
      const thanksPageUrl = "/thanks";

      // リダイレクト
      window.location.href = thanksPageUrl;
    }
  };

  return (
    <NestedLayout title="お問い合わせ" pageName="お問い合わせ">
      <section>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>メールフォームでのお問い合わせ</h2>
          <p>
            メールフォームでのお問い合わせやご質問、ご相談についてはこちらよりお願いいたします。
            <br></br>
            お問い合わせをいただいて2～3営業日以内にお電話にて内容の確認をさせていただきます。
            <br></br>
            万が一、2～3営業日経ちましても、折り返しのご連絡がない場合はメールトラブルの可能性もございます。
            <br></br>
            その際も下記のお電話にてご連絡をお願いします
          </p>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.container}>
              <div className={styles.label}>
                <label>お名前</label>
              </div>

              <div className={styles.data}>
                <input className={styles.input} type="text" ref={nameRef} id="name" required />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.label}>
                <label>ふりがな</label>
              </div>

              <div className={styles.data}>
                <input className={styles.input} type="text" ref={kanaRef} id="hurigana" required />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.label}>
                <labe>電話番号</labe>
              </div>

              <div className={styles.data}>
                <input className={styles.input} type="tel" ref={telRef} id="tel" required />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.label}>
                <label>Eメールアドレス</label>
              </div>

              <div className={styles.data}>
                <input className={styles.input} type="email" ref={emailRef} id="email" required />
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.label}>
                <label>お問い合わせ内容</label>
              </div>

              <div className={styles.data}>
                <textarea className={styles.input} ref={messageRef} id="message" required />
              </div>
            </div>
          </form>

          <div className={styles.privacyPolicy}>
            <p>
              当社の<Link href="/privacy-policy">プライバシポリシー</Link>
              について同意される⽅のみ送信できます。
            </p>

            <div className={styles.checkbox}>
              <input name="check" id="check" type="checkbox" />
              <label for="check">上記プライバシーポリシーに同意する</label>
            </div>
          </div>

          <div className={styles.button}>
            <button
              className={`${buttonStyles.button} ${buttonStyles.primaryButtonSmall}`}
              type="submit"
              required
            >
              送信する
            </button>
          </div>
        </div>
      </section>
    </NestedLayout>
  );
}
