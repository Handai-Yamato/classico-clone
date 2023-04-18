import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ReactSVG } from "react-svg";
import { client } from "../../../lib/client";
// component
import HomeIcon from "@/components/svg/homeIcon.jsx";
// styles
import styles from "@/styles/blog/Id.module.scss";
import Link from "next/link";
import BreadCrumbs from "@/components/breadCrumbs";
import NestedLayout from "@/components/layout/nested-layout";

// 事前に生成するためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// publishedAtを西暦 + 月 + 日 +にする
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}.${month}.${day}`;
};

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  // フォーマットされた日付を取得
  const formattedDate = formatDate(data.publishedAt);

  return {
    props: {
      works: {
        ...data,
        formattedDate, // フォーマットされた日付を追加
      },
    },
  };
};

export default function WorksId({ works }) {
  const crumbs = [
    { title: <HomeIcon />, url: "/" },
    { title: "施工事例", url: "/works" },
    { title: works.title, url: `/works/${works.id}` },
  ];

  return (
    <NestedLayout title={works.title} pageName={works.title}>
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          <NextSeo
            description={works.description}
            openGraph={{
              title: works.title,
              description: works.description,
              images: [
                {
                  url: works.images[0].url,
                  width: works.images[0].width,
                  height: works.images[0].height,
                  alt: works.images[0].alt,
                },
              ],
            }}
          />

          <p className={styles.date}>{works.formattedDate}</p>
          <h1 className={styles.title}>{works.title}</h1>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: `${works.description}` }}
          />
          <div className={styles.images} dangerouslySetInnerHTML={{ __html: `${works.images}` }} />
        </div>
      </div>
    </NestedLayout>
  );
}
