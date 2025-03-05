import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type TagProps = {
  readonly children?: ReactNode;
  readonly className?: string;
};

export const Tag: FC<TagProps> = ({ children, className }) => (
  <span
    className={clsx(
      'rounded-sm bg-gray-800 px-2 py-1 text-xs leading-none',
      className
    )}
  >
    {children}
  </span>
);
