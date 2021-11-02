import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header: FC = () => (
  <div className={styles.header}>
    <Link href="/" passHref>
      <a>
        <span className={styles.profile}>
          <Image src="/profile.png" width="60" height="60" alt="" />
        </span>
        <span className={styles.logo}>Hayden Barnett</span>
      </a>
    </Link>
  </div>
);

export default Header;
