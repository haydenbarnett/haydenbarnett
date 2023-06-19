import type { FC, ReactNode } from 'react';

type PageLayoutProps = {
  title?: string;
  children?: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => (
  <div className="flex max-w-3xl flex-col gap-4 px-6 pb-12 md:pb-24">
    {title ? (
      <h1 className="text-base font-medium text-white">{title}</h1>
    ) : null}
    <div>{children}</div>
  </div>
);
