import type { FC, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { ChevronRightIcon } from '../Icons';

type CardProps = {
  as?: any;
  className?: string;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({
  as: Component = 'div',
  className,
  children,
}) => {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
};

type CardLogoPanel = {
  children?: ReactNode;
  className?: string;
};

export const CardLogoPanel: FC<CardLogoPanel> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        'relative z-10 mb-4 flex h-32 w-full items-center justify-center rounded-lg ring-1 ring-neutral-300 dark:bg-neutral-800 dark:ring-neutral-800'
      )}
    >
      {children}
    </div>
  );
};

type CardLink = {
  children?: ReactNode;
  href: string;
  target?: string;
  className?: string;
};

export const CardLink: FC<CardLink> = ({ children, href, ...props }) => {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 ring-1 ring-neutral-300 transition group-hover:scale-100 group-hover:opacity-100 dark:ring-neutral-800 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href} {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

type CardTitleProps = {
  as?: any;
  children?: ReactNode;
  href?: string;
  target?: string;
};

export const CardTitle: FC<CardTitleProps> = ({
  as: Component = 'h2',
  href,
  target,
  children,
}) => {
  return (
    <Component className="flex gap-2 text-base font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
      {href ? (
        <CardLink href={href} target={target} className="flex gap-2">
          {children}
        </CardLink>
      ) : (
        children
      )}
    </Component>
  );
};

type CardDescription = {
  children?: ReactNode;
};

export const CardDescription: FC<CardTitleProps> = ({ children }) => {
  return (
    <p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  );
};

type CardCtaProps = {
  children?: ReactNode;
};

export const CardCta: FC<CardCtaProps> = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-neutral-500 transition group-hover:text-neutral-800 dark:group-hover:text-neutral-200"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

type CardEyebrowProps = {
  as?: any;
  className?: string;
  children?: ReactNode;
};

export const CardEyebrow: FC<CardEyebrowProps> = ({
  as: Component = 'p',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 mb-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500'
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
