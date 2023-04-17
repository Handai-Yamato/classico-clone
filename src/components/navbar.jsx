import React, { useState } from "react";
import Link from "next/link";
// image
import Image from "next/image";
// styles
import styles from "@/styles/components/Navbar.module.scss";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className={styles.logo}
          width={123}
          height={27}
          priority
        />
      </Link>
      <nav className={styles.gnav}>
        {/* ドロワーメニュー */}
        <div
          className={`${styles.hamburgerMenu} ${isDrawerOpen ? styles.close : ""}`}
          onClick={toggleDrawer}
        >
          <span className={`${styles.hamburgerIcon} ${isDrawerOpen ? styles.active : ""}`}></span>
          <span className={`${styles.hamburgerIcon} ${isDrawerOpen ? styles.active : ""}`}></span>
          <span className={`${styles.hamburgerIcon} ${isDrawerOpen ? styles.active : ""}`}></span>
        </div>

        <div className={`${styles.drawerMenu} ${isDrawerOpen ? styles.show : ""}`}>
          <ul>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
          </ul>
        </div>

        {/* PCメニュー */}
        <ul className={styles.gnavList}>
          <li className={styles.gnavItem}>
            <Link href="/">ホーム</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="/about">会社情報</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="/renovate">リノベーションする</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="/works">施工事例</Link>
          </li>
          <li className={styles.gnavItem}>
            <Link href="/access">アクセス</Link>
          </li>
          <li className={`${styles.gnavItem} ${styles.contactButton}`}>
            <Link href="/contact">お問合せ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
