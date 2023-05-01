// styles
import styles from "@/styles/components/Access.module.scss";
// component
import { SecondaryButton } from "@/components/button";

export default function Access() {
  return (
    <>
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
    </>
  );
}
