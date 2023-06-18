import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type TagProps = {
  children?: ReactNode;
  className?: string;
};

export const Tag: FC<TagProps> = ({ children, className }) => (
  <span className={clsx(className, 'text-xs leading-none')}>{children}</span>
);
