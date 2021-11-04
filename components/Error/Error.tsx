import type { FC } from "react";
import Link from "next/link";
import styles from "../Introduction/styles.module.css";

export const Error: FC = () => (
  <div className={styles.introduction}>
    <h2 className={styles.heading}>
      <Link href="/" passHref>
        <a className={styles.link}>Page not found</a>
      </Link>
    </h2>
  </div>
);

export default Error;
