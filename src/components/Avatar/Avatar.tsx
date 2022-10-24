import type { CSSProperties, FC } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import clsx from 'clsx';

import avatarImage from '@/images/avatar.jpg';

type AvatarProps = {
  className?: string;
  style?: CSSProperties;
};

export const Avatar: FC<AvatarProps> = ({ className, ...props }) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto rounded-full')}
      {...props}
    >
      <Image
        src={avatarImage}
        height="40"
        width="40"
        className="rounded-full bg-white dark:bg-gray-900"
        alt=""
        priority
      />
    </Link>
  );
};
