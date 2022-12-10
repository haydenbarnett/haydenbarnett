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
  // credit to https://codepen.io/Chokcoco/pen/dypaobm for inspiring this mess
  className = clsx(
    'relative inline-flex py-2 px-4 items-center justify-center gap-2 overflow-hidden rounded-md text-sm font-medium outline-offset-2 transition active:transition-none z-0',
    'ring-1 ring-neutral-300 text-neutral-800 ring-offset-neutral-200 dark:ring-offset-neutral-900 hover:ring-offset-2 hover:ring-neutral-400/50 dark:ring-neutral-800 dark:text-neutral-300 dark:hover:ring-neutral-700',
    "before:content-[''] before:transition-opacity before:duration-[2000ms] before:opacity-0 hover:before:opacity-100 before:aspect-square before:absolute before:-left-1/2 before:z-[-2] before:w-[200%] before:animate-rotate before:bg-neutral-200 dark:before:bg-neutral-900 dark:before:bg-gradient-gold-dark before:bg-gradient-gold-light before:bg-no-repeat",
    "after:content-[''] after:bg-neutral-200 dark:after:bg-neutral-900 after:w-[calc(100%-4px)] after:h-[calc(100%-4px)] after:bg-blue after:absolute after:left-[2px] after:top-[2px] after:z-[-1] after:rounded-md",
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};
