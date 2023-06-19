import Link from 'next/link';
import { ChevronRightIcon } from './Icons';
import type { FC } from 'react';

type RowProps = {
  href?: string;
  hrefLabel?: string;
  title: string;
  date?: string;
};

export const Row: FC<RowProps> = ({ href, hrefLabel, title, date }) => {
  const content = (
    <>
      <span>{title}</span>
      <span className="relative w-1/2 text-right">
        <span className="group-hover:opacity-0 group-focus-visible:opacity-0">
          {date}
        </span>
        <span className="absolute right-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
          {hrefLabel ?? 'Visit website'}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group relative inline-flex w-full max-w-[420px] items-center gap-2 outline-0"
        target="_blank"
      >
        <ChevronRightIcon className="absolute right-full mr-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="-ml-2 flex w-full items-center justify-between px-2 py-1.5 transition-colors group-hover:text-white  group-focus-visible:text-white">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div className="flex w-full max-w-[420px] items-center">
      <div className="flex w-full items-center justify-between py-1.5">
        {content}
      </div>
    </div>
  );
};
