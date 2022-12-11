import type { FC } from 'react';
import Image from 'next/image';

import thumbsup from '@/images/thumbsup.png';

export const Footer: FC = () => {
  return (
    <footer className="my-48 flex justify-center">
      <span className="select-none">
        <Image src={thumbsup} height="40" width="40" alt="" />
      </span>
    </footer>
  );
};
