import type { FC, HTMLProps, ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import clsx from 'clsx';

type CardProps = HTMLProps<HTMLDivElement>;

export const Card: FC<CardProps> = ({ className, children }) => (
  <div className={clsx(className, 'group relative flex flex-col items-start')}>
    {children}
  </div>
);

type CardLogoPanelProps = HTMLProps<HTMLDivElement>;

export const CardLogoPanel: FC<CardLogoPanelProps> = ({
  children,
  className,
}) => (
  <div
    className={clsx(
      className,
      'relative z-10 mb-4 flex h-32 w-full items-center justify-center rounded-lg ring-1 ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-800'
    )}
  >
    {children}
  </div>
);

type CardLinkProps = LinkProps & {
  children?: ReactNode;
  target?: string;
  className?: string;
};

export const CardLink: FC<CardLinkProps> = ({ children, href, ...props }) => (
  <>
    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 ring-1 ring-zinc-300 transition group-hover:scale-100 group-hover:opacity-100 dark:ring-zinc-800 sm:-inset-x-6 sm:rounded-2xl" />
    <Link href={href} {...props}>
      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  </>
);

type CardTitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  href?: string;
  target?: string;
};

export const CardTitle: FC<CardTitleProps> = ({
  as: Component = 'h2',
  href,
  target,
  children,
}) => (
  <Component className="flex items-center gap-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
    {href ? (
      <CardLink href={href} target={target} className="flex gap-2">
        {children}
      </CardLink>
    ) : (
      children
    )}
  </Component>
);

type CardDescriptionProps = HTMLProps<HTMLParagraphElement>;

export const CardDescription: FC<CardDescriptionProps> = ({ children }) => (
  <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
    {children}
  </p>
);

type CardCtaProps = HTMLProps<HTMLDivElement>;

export const CardCta: FC<CardCtaProps> = ({ children }) => (
  <div className="relative z-10 mt-4 flex items-center gap-1 text-sm font-medium text-zinc-500 transition group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
    {children}
  </div>
);

type CardEyebrowProps = HTMLProps<HTMLParagraphElement>;

export const CardEyebrow: FC<CardEyebrowProps> = ({
  className,
  children,
  ...props
}) => (
  <p
    className={clsx(
      className,
      'relative z-10 mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500'
    )}
    {...props}
  >
    {children}
  </p>
);
