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

type CardLink = {
  children?: ReactNode;
  href: string;
  target?: string;
  className?: string;
};

export const CardLink: FC<CardLink> = ({ children, href, ...props }) => {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50 sm:-inset-x-6 sm:rounded-2xl" />
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
    <Component className="flex gap-2 text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100">
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
    <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
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
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

type CardEyebrowProps = {
  as?: any;
  decorate?: boolean;
  className?: string;
  children?: ReactNode;
};

export const CardEyebrow: FC<CardEyebrowProps> = ({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
