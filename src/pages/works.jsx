import React from "react";
import Image from "next/image";
import Link from "next/link";
// library
import { client } from "../../lib/client";
// component
import NestedLayout from "@/components/layout/nested-layout";
import Pagination from "@/components/pagination";
// styles
import styles from "@/styles/Works.module.scss";
import BreadCrumbs from "@/components/breadCrumbs";

// SSG
export const getStaticProps = async () => {
  const worksData = await client.get({ endpoint: "works", queries: { offset: 0, limit: 9 } });

  return {
    props: {
      works: worksData.contents,
      totalCount: worksData.totalCount,
    },
  };
};

const Works = ({ works, totalCount }) => {
  return (
    <NestedLayout title="施工事例" pageName="施工事例">
      <div className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>
          Works<span>施工事例</span>
        </h2>
      </div>

      <BreadCrumbs pageName="施工事例" />

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
      </section>

      <Pagination totalCount={totalCount} />
    </NestedLayout>
  );
};

export default Works;
