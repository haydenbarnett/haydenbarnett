import type { FC } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

type BackButtonProps = {
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ href }) => (
  <Link href={href}>
    <div className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-zinc-300 transition hover:ring-zinc-400 dark:ring-zinc-800 dark:hover:ring-zinc-700 lg:absolute lg:left-0 lg:mb-0 lg:mt-0">
      <ArrowLeftIcon className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-800 dark:group-hover:text-zinc-300" />
    </div>
  </Link>
);
