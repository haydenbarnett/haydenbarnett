import Link from 'next/link';
import clsx from 'clsx';
import { config } from '@/data/config';
import { ChevronRightIcon, HorizontalDotsIcon, UserIcon } from './Icons';
import type { FC } from 'react';

type HeaderLinkProps = {
  href: string;
  title: string;
  company: string;
  className?: string;
};

const HeaderLink: FC<HeaderLinkProps> = ({
  href,
  title,
  company,
  className,
}) => (
  <Link
    href={href}
    className={clsx('group inline-flex items-center gap-4 py-2', className)}
  >
    <span className="text-sm transition-colors group-hover:text-white">
      {title} <span className="flex lg:inline-flex">— {company}</span>
    </span>
  </Link>
);

export const Header: FC = () => (
  <header className="group/noodles relative inline-flex flex-col md:pl-10">
    <Link href="/" className="peer/home inline-flex flex-col gap-4 pb-1.5">
      <UserIcon className="lg:hidden" />
      <h1 className="text-base font-medium text-white">{config.name}</h1>
    </Link>
    <HeaderLink
      href="/work/corellium"
      title={config.title}
      company={config.company}
      className="peer/work"
    />
    <HeaderLink
      href="/work/surge"
      title="After hours"
      company={config.studio}
      className="peer/studio"
    />
    <Link
      href="/about"
      className="peer/about group inline-flex items-center gap-4 py-1.5"
    >
      <div className="relative flex h-6 w-full items-center">
        <HorizontalDotsIcon className="opacity-100 transition-opacity group-hover:opacity-0" />
        <span className="absolute left-0 text-sm opacity-0 transition-opacity group-hover:text-white group-hover:opacity-100">
          View more
        </span>
      </div>
    </Link>
    <UserIcon className="pointer-events-none absolute left-0 top-0 hidden shrink-0 transition peer-hover/about:translate-y-[108px] peer-hover/studio:translate-y-[72px] peer-hover/work:translate-y-[36px] peer-hover/about:opacity-0 peer-hover/studio:opacity-0 peer-hover/work:opacity-0 lg:inline-flex" />
    <ChevronRightIcon className="pointer-events-none absolute left-0 top-0 hidden shrink-0 opacity-0 transition peer-hover/about:translate-y-[108px] peer-hover/studio:translate-y-[72px] peer-hover/work:translate-y-[36px] peer-hover/about:opacity-100 peer-hover/studio:opacity-100 peer-hover/work:opacity-100 lg:inline-flex" />
  </header>
);
