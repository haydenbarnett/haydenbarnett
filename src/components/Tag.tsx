import type { FC, HTMLProps } from 'react';
import clsx from 'clsx';

type TagProps = HTMLProps<HTMLSpanElement>;

export const Tag: FC<TagProps> = ({ className, ...props }) => (
  <span
    className={clsx(
      className,
      'flex-grow-0 rounded-full px-2 py-1 text-xs leading-none text-zinc-500 ring-1 ring-zinc-300 dark:ring-zinc-800'
    )}
    {...props}
  />
);
