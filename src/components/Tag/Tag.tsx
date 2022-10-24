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
        'flex-grow-0 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium leading-none text-gray-600 dark:bg-gray-800 dark:text-gray-500'
      )}
    >
      {children}
    </span>
  );
};
