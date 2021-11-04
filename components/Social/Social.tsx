import { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

type SocialProps = {
  onLoadingComplete?: () => void;
};

export const Social: FC<SocialProps> = ({ onLoadingComplete }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    imagesLoaded === 4 && onLoadingComplete && onLoadingComplete();
  }, [imagesLoaded]);

  return (
    <div className={styles.social}>
      <a
        href="https://github.com/haydenbarnett"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/github.svg"
          width="16"
          height="16"
          alt="GitHub"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setImagesLoaded(imagesLoaded + 1);
            }
          }}
        />
      </a>
      <a
        href="https://dribbble.com/haydenbarnett"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/dribbble.svg"
          width="16"
          height="16"
          alt="Dribbble"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setImagesLoaded(imagesLoaded + 1);
            }
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/haydenbarnett"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          width="16"
          height="16"
          alt="LinkedIn"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setImagesLoaded(imagesLoaded + 1);
            }
          }}
        />
      </a>
      <a href="mailto:hello@haydenbarnett.com" target="_blank" rel="noreferrer">
        <Image
          src="/icons/email.svg"
          width="16"
          height="16"
          alt="Email"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setImagesLoaded(imagesLoaded + 1);
            }
          }}
        />
      </a>
    </div>
  );
};

export default Social;
