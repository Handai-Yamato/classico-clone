import Head from "next/head";
import React from "react";
// component
import BreadCrumbs from "../breadCrumbs";
// styles
import styles from "@/styles/components/layout/NestedLayout.module.scss";

export default function NestedLayout({ children, title, pageName }) {
  const t = `${title} | 株式会社クラシコ`;

  return (
    <div className={styles.layout}>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}
      <BreadCrumbs pageName={pageName} />
    </div>
  );
}
