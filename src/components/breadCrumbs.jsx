import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// component
import HomeIcon from "@/components/svg/homeIcon.jsx";
// styles
import styles from "@/styles/components/BreadCrumbs.module.scss";

const BreadCrumbs = ({ pageName }) => {
  const router = useRouter();
  const paths = decodeURI(router.asPath).substring(1).split("/");
  const roots = [""];
  for (let i = 0; i < paths.length; i++) roots.push(roots[i] + "/" + paths[i]);

  return (
    <nav className={styles.crumbsNav}>
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      {paths.map((x, i) => {
        if (roots[i + 1].startsWith("/works/page")) {
          return null; // 「works/page/[id].jsx」の場合はパンくずリストに表示しない
        }
        return (
          <React.Fragment key={i}>
            <span className={styles.crumbsSlash}>{" / "}</span>
            <Link href={roots[i + 1]} className={styles.crumbsItem}>
              {i === paths.length - 1 ? <span>{pageName}</span> : getPageName(x)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

const getPageName = (path) => {
  switch (path) {
    case "about":
      return "会社情報";
    case "renovate":
      return "リノベーション";
    case "works":
      return "施工事例";
    case "access":
      return "アクセス";
    case "contact":
      return "お問合せ";
    default:
      return path;
  }
};

export default BreadCrumbs;
