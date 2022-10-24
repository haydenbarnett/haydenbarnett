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
}) => {
  return (
    <div
      className={clsx(
        'relative mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
