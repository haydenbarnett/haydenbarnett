import type { CSSProperties, FC } from 'react';
import Image from 'next/image';
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
      className={clsx(
        className,
        'pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-300 dark:ring-gray-800'
      )}
      {...props}
    >
      <Image
        src={avatarImage}
        height="32"
        width="32"
        className="rounded-full"
        alt=""
        priority
      />
    </Link>
  );
};
