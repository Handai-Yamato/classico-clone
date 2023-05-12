import React, { useRef } from "react";
// component
import NestedLayout from "@/components/layout/nested-layout";
// styles
import styles from "@/styles/Contact.module.scss";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Name:
              <input type="text" ref={nameRef} id="name" />
            </label>
            <label>
              Email:
              <input type="email" ref={emailRef} id="email" />
            </label>
            <label>
              Message:
              <textarea ref={messageRef} id="message" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </NestedLayout>
  );
}
