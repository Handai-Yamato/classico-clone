import Link from "next/link";
import React from "react";

import styles from "@/styles/components/Button.module.scss";

const Button = ({ href, text, className }) => {
  return (
    <Link href={href}>
      <button className={`${styles.button} ${className}`}>{text}</button>
    </Link>
  );
};

export const PrimaryButtonSmall = ({ href, text, className }) => {
  return <Button href={href} text={text} className={styles.primaryButtonSmall} />;
};

export const PrimaryButtonLarge = ({ href, text, className }) => {
  return <Button href={href} text={text} className={styles.primaryButton} />;
};

export const SecondaryButton = ({ href, text }) => {
  return <Button href={href} text={text} className={styles.SecondaryButton} />;
};
