import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  variant?: 'secondary' | 'primary';
  className?: string;
  href?: string;
  target?: string;
  children?: ReactNode;
};

const variantStyles = {
  primary:
    'bg-gray-800 font-medium text-white hover:bg-gray-700 active:bg-gray-800 active:text-white dark:bg-gray-800/50 dark:hover:bg-gray-700/50 dark:active:bg-gray-800/50',
  secondary:
    'bg-gray-50 font-medium text-gray-900 hover:bg-gray-100 active:bg-gray-100 active:text-gray-900 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:active:bg-gray-800/50 dark:active:text-gray-50',
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  className,
  href,
  ...props
}) => {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-4 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  );

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};
