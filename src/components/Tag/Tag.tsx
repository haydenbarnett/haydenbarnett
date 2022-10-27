import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TagProps = {
  children?: ReactNode;
  className?: string;
};

export const Tag: FC<TagProps> = ({ children, className }) => {
  return (
    <span
      className={clsx(
        className,
        'flex-grow-0 rounded-full px-2 py-1 text-xs leading-none text-gray-500 ring-1 ring-gray-300 dark:ring-gray-800'
      )}
    >
      {children}
    </span>
  );
};
