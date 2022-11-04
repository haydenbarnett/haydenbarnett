import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  className?: string;
  href?: string;
  target?: string;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ className, href, ...props }) => {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none',
    'bg-transparent font-medium ring-1 ring-neutral-300 text-neutral-800 hover:ring-neutral-400 active:ring-neutral-400 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:ring-neutral-700 dark:active:ring-neutral-700',
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};
