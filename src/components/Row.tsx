import Link from 'next/link';
import { ChevronRightIcon } from './Icons';
import type { FC } from 'react';

type RowProps = {
  readonly href?: string;
  readonly hrefLabel?: string;
  readonly title: string;
  readonly date?: string;
  readonly isExternal?: boolean;
};

export const Row: FC<RowProps> = ({
  href,
  hrefLabel,
  title,
  date,
  isExternal,
}) => {
  const content = (
    <>
      <span className="group-hover:text-white group-focus-visible:text-white">
        {title}
      </span>
      <span className="relative w-1/2 text-right">
        <span className="transition group-hover:opacity-0 group-focus-visible:opacity-0">
          {date}
        </span>
        <span className="absolute right-0 opacity-0 transition group-hover:text-white group-hover:opacity-100 group-focus-visible:text-white  group-focus-visible:opacity-100">
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
        target={isExternal ? '_blank' : undefined}
      >
        <ChevronRightIcon className="absolute right-full mr-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
        <div className="-ml-2 flex w-full items-center justify-between px-2 py-1.5">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div className="relative flex w-full max-w-[420px] items-center">
      <div className="-ml-2 flex w-full items-center justify-between px-2 py-1.5">
        {content}
      </div>
    </div>
  );
};
