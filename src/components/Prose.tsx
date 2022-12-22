import type { FC, ReactNode } from 'react';
import clsx from 'clsx';

type ProseProps = {
  children?: ReactNode;
  className?: string;
};

export const Prose: FC<ProseProps> = ({ children, className }) => (
  <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
);
