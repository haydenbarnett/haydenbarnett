import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type ProseProps = {
  children?: ReactNode;
  className?: string;
};

export const Prose: FC<ProseProps> = ({ children, className }) => (
  <div className={clsx(className, 'prose-invert prose')}>{children}</div>
);
