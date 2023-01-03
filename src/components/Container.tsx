import type { CSSProperties, FC, ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clsx(
      'relative mx-auto w-full max-w-5xl px-4 sm:px-8',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
