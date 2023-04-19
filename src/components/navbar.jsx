import React, { useState, useEffect } from "react";
import Link from "next/link";
// image
import Image from "next/image";
// styles
import styles from "@/styles/components/Navbar.module.scss";
import { PrimaryButtonLarge } from "./button";
import { PrimaryButtonSmall } from "./button";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ドロワーメニューが開かれたときにbody要素にoverflow:hiddenを設定する
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="Logo" width={123} height={27} priority />
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
          <ul className={styles.drawerList}>
            <Link href="/" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>ホーム</li>
            </Link>
            <Link href="/about" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>会社情報</li>
            </Link>
            <Link href="/renovate" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>リノベーションする</li>
            </Link>
            <Link href="/works" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>施工事例</li>
            </Link>
            <Link href="/access" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>アクセス</li>
            </Link>
            <Link href="/recruit" onClick={toggleDrawer}>
              <li className={styles.drawerItem}>採用情報</li>
            </Link>
            <li className={`${styles.drawerItem} ${styles.drawerButton}`} onClick={toggleDrawer}>
              <PrimaryButtonLarge href="/contact" text="お問合せ" />
            </li>
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
