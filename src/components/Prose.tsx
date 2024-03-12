import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type ProseProps = {
  readonly children?: ReactNode;
  readonly className?: string;
};

export const Prose: FC<ProseProps> = ({ children, className }) => (
  <div className={clsx(className, 'prose-invert prose')}>{children}</div>
);
