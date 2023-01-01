import type { FC, HTMLProps } from 'react';
import clsx from 'clsx';

type ProseProps = HTMLProps<HTMLDivElement>;

export const Prose: FC<ProseProps> = ({ children, className }) => (
  <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
);
