import Link from 'next/link';
import { social } from '@/data';
import { LinkIcon } from './Icons';
import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className="pl-10">
    <div className="-ml-10 flex items-center gap-4">
      <LinkIcon />
      {social.map(({ href, label }) => (
        <Link
          className="rounded-md text-sm text-zinc-400 outline-none transition hover:text-white focus-visible:shadow-focus"
          key={href}
          href={href}
        >
          {label}
        </Link>
      ))}
    </div>
  </footer>
);
