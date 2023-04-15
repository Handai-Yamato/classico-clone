import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
// styles
import styles from "@/styles/Home.module.scss";
// component
import NestedLayout from "@/components/layout/nested-layout";
import { PrimaryButtonSmall } from "@/components/button";
// image
import hero from "../../public/image_home_hero.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <NestedLayout>
      <div>
        <Image src={hero} alt="メインビジュアル" className={styles.heroImage} />
      </div>

      <div className={styles.heroContents}>
        <Image src="/logo.svg" alt="Logo" className={styles.heroLogo} fill />
        <p className={styles.heroText}>
          住みやすさと品質にこだわった<span>クラシコのリノベーションで</span>
          <br></br>快適な価値ある生活を
        </p>
      </div>
      <div className={styles.aboutButton}>
        <PrimaryButtonSmall href="/about" text="会社情報はこちら" />
      </div>

      {/* Works section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Works<span>施工事例</span>
        </h2>
      </section>

      {/* News section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          News<span>お知らせ</span>
        </h2>
      </section>

      {/* Access section */}
      <section className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>
          Access<span>アクセス</span>
        </h2>
      </section>

      {/* About & Recruit link section */}
      <section className={styles.sectionContainer}></section>
    </NestedLayout>
  );
}
