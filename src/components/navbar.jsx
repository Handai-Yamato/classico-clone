import React, { useState } from "react";
import styles from "@/styles/components/Navbar.module.scss";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.gnav}>
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
      </nav>
    </header>
  );
}
