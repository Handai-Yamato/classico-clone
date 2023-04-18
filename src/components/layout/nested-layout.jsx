import Head from "next/head";
import React from "react";
import BreadCrumbs from "../breadCrumbs";

export default function NestedLayout({ children, title, pageName }) {
  const t = `${title} | 株式会社クラシコ`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      <BreadCrumbs pageName={pageName} />
      {children}
      <BreadCrumbs pageName={pageName} />
    </>
  );
}
