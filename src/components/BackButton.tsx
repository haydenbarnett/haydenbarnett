import type { FC } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

type BackButtonProps = {
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ href }) => (
  <Link href={href}>
    <div className="gold-spiral mb-8 h-10 w-10 rounded-full after:rounded-full lg:absolute lg:left-0 lg:mb-0 lg:mt-0">
      <ArrowLeftIcon className="h-4 w-4" />
    </div>
  </Link>
);
