import Link from 'next/link';
import { social } from '@/data';
import { LinkIcon } from './Icons';
import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className="md:pl-10">
    <div className="flex items-center gap-4 md:-ml-10">
      <LinkIcon className="hidden h-5 w-5 md:flex" />
      {social.map(({ href, label }) => (
        <Link
          className="rounded-md text-sm text-zinc-400 outline-none transition hover:text-white focus-visible:text-white"
          key={href}
          href={href}
        >
          {label}
        </Link>
      ))}
    </div>
  </footer>
);
