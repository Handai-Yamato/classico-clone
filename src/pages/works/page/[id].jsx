import React from "react";
import Image from "next/image";
import Link from "next/link";
// library
import { client } from "/lib/client";
// component
import NestedLayout from "@/components/layout/nested-layout";
import Pagination from "@/components/pagination";
// styles
import styles from "@/styles/Works.module.scss";

const PER_PAGE = 9;

export default function BlogPageId({ works, totalCount }) {
  return (
    <NestedLayout title="施工事例" pageName="施工事例">
      <section>
        <div className={styles.sectionContainer}>
          <ul className={styles.worksList}>
            {works.map((work) => (
              <li className={styles.worksItem} key={work.id}>
                <Link href={`/works/${work.id}`}>
                  {work.thumbnail && (
                    <Image
                      src={work.thumbnail.url}
                      alt={work.title}
                      className={styles.worksThumbnail}
                      width={1280}
                      height={960}
                    />
                  )}
                  <div className={styles.worksTextContainer}>
                    <h3 className={styles.worksTitle}>{work.title}</h3>
                    <div
                      className={styles.worksDescription}
                      dangerouslySetInnerHTML={{ __html: `${work.description}` }}
                    />
                    <p className={styles.worksDate}>
                      {new Date(work.publishedAt)
                        .toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, ".")}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Pagination totalCount={totalCount} />
      </section>
    </NestedLayout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "works" });

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/works/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await client.get({ endpoint: "works", queries: { offset: (id - 1) * 9, limit: 9 } });

  return {
    props: {
      works: data.contents,
      totalCount: data.totalCount,
    },
  };
};
