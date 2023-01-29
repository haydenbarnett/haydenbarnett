import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: FC = () => (
  <footer className="my-48 flex justify-center">
    <Link href="#top" className="group select-none">
      <Image
        src="/thumbsup.png"
        height="40"
        width="40"
        alt="Back to top"
        className="group-hover:animate-thumbsup"
      />
    </Link>
  </footer>
);
