import Link from 'next/link';
import { config } from '@/data/config';
import { ChevronRightIcon, HorizontalDotsIcon, UserIcon } from './Icons';
import type { FC } from 'react';

export const Header: FC = () => (
  <header className="relative inline-flex flex-col gap-3 pl-10">
    <Link href="/" className="-ml-10 inline-flex items-center gap-4">
      <UserIcon className="shrink-0" />
      <h1 className="text-base font-medium text-white">{config.name}</h1>
    </Link>
    <Link
      href="/work/corellium"
      className="group -ml-10 inline-flex items-center gap-4"
    >
      <ChevronRightIcon className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="text-sm transition-colors group-hover:text-white">
        {config.title} — {config.company}
      </span>
    </Link>
    <Link
      href="/work/surge"
      className="group -ml-10 inline-flex items-center gap-4"
    >
      <ChevronRightIcon className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="text-sm transition-colors group-hover:text-white">
        After hours — {config.studio}
      </span>
    </Link>
    <Link href="/about" className="group -ml-10 inline-flex items-center gap-4">
      <ChevronRightIcon className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex h-6 w-full items-center">
        <HorizontalDotsIcon className="opacity-100 transition-opacity group-hover:opacity-0" />
        <span className="absolute left-0 text-sm opacity-0 transition-opacity group-hover:text-white group-hover:opacity-100">
          View more
        </span>
      </div>
    </Link>
  </header>
);
