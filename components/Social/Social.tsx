import type { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export const Social: FC = () => (
  <div className={styles.social}>
    <a
      href="https://dribbble.com/haydenbarnett"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/icons/dribbble.svg" width="16" height="16" alt="Dribbble" />
    </a>
    <a href="https://github.com/haydenbarnett" target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" width="16" height="16" alt="GitHub" />
    </a>
    <a
      href="https://www.linkedin.com/in/haydenbarnett"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/icons/linkedin.svg" width="16" height="16" alt="LinkedIn" />
    </a>
    <a href="mailto:hello@haydenbarnett.com" target="_blank" rel="noreferrer">
      <Image src="/icons/email.svg" width="16" height="16" alt="Email" />
    </a>
  </div>
);

export default Social;
