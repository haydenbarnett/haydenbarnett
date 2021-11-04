import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

type HeaderProps = {
  onLoadingComplete?: () => void;
};

export const Header: FC<HeaderProps> = ({ onLoadingComplete }) => {
  return (
    <div className={styles.header}>
      <Link href="/" passHref>
        <a>
          <span className={styles.profile}>
            <Image
              src="/profile.png"
              width="60"
              height="60"
              alt=""
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.indexOf("data:image/gif;base64") < 0) {
                  onLoadingComplete && onLoadingComplete();
                }
              }}
            />
          </span>
          <span className={styles.logo}>Hayden Barnett</span>
        </a>
      </Link>
    </div>
  );
};

export default Header;
