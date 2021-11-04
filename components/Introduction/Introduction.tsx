import type { FC } from "react";
import styles from "./styles.module.css";

export const Introduction: FC = () => (
  <div className={styles.introduction}>
    <h2 className={styles.heading}>Frontend engineer &amp; digital designer</h2>
    <p className={styles.position}>
      Engineer at{" "}
      <a
        className={styles.link}
        href="https://corellium.com"
        target="_blank"
        rel="noreferrer"
      >
        Corellium
      </a>{" "}
      <span className={styles.divider}>/</span> Director at{" "}
      <a
        className={styles.link}
        href="https://surge.studio/"
        target="_blank"
        rel="noreferrer"
      >
        Surge
      </a>
    </p>
    <p className={styles.location}>Sydney, Australia</p>
  </div>
);

export default Introduction;
