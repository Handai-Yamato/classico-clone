import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// styles
import styles from "@/styles/components/Pagination.module.scss";

const Pagination = ({ totalCount }) => {
  const PER_PAGE = 9;
  const router = useRouter();
  const page = parseInt(router.asPath.split("/").pop()) || 1;

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {page > 1 && (
          <li className={styles.prevButton}>
            <Link href={`/works/page/${page - 1}`}>← Prev</Link>
          </li>
        )}
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li className={`${styles.item} ${page === number ? styles.currentItem : ""}`} key={index}>
            <Link href={`/works/page/${number}`}>{number}</Link>
          </li>
        ))}
        {page < Math.ceil(totalCount / PER_PAGE) && (
          <li className={styles.nextButton}>
            <Link href={`/works/page/${page + 1}`}>Next →</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
