import { social } from '@/data';
import Link from 'next/link';
import type { FC } from 'react';
import { LinkIcon } from './Icons';

export const Footer: FC = () => (
  <footer className="md:pl-10">
    <div className="md:-ml-10 flex items-center gap-4">
      <LinkIcon className="hidden h-5 w-5 md:flex" />
      {social.map(({ href, label }) => (
        <Link
          className="rounded-md text-gray-400 text-sm outline-none transition hover:text-white focus-visible:text-white"
          key={href}
          href={href}
        >
          {label}
        </Link>
      ))}
    </div>
  </footer>
);
