import type { FC } from 'react';
import Image from 'next/image';

export const Footer: FC = () => (
  <footer className="my-48 flex justify-center">
    <span className="select-none">
      <Image src="/thumbsup.png" height="40" width="40" alt="" />
    </span>
  </footer>
);
