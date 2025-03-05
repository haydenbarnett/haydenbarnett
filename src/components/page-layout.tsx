import type { FC, ReactNode } from 'react';

type PageLayoutProps = {
  readonly title?: string;
  readonly children?: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => (
  <div className="relative flex max-w-3xl flex-col gap-4 px-6 pb-12 md:pb-24">
    {title ? (
      <h1 className="font-medium text-base text-white">{title}</h1>
    ) : null}
    <div>{children}</div>
  </div>
);
