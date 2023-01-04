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
  const buttonClassName = clsx(
    'relative py-2 px-4 gap-2 rounded-md after:rounded-md text-sm font-medium gold-spiral',
    className
  );

  return href ? (
    <Link href={href} className={buttonClassName} {...props} />
  ) : (
    <button type="button" className={buttonClassName} {...props} />
  );
};
