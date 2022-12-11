import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

import { navigation } from '@/data';

type NavItemProps = {
  href: string;
  target?: string;
  children?: ReactNode;
};

const NavItem: FC<NavItemProps> = ({ href, target, children }) => {
  let isActive = useRouter().pathname === href;

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        'flex whitespace-nowrap px-3 py-2 transition',
        isActive
          ? 'text-neutral-800 dark:text-neutral-200'
          : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
      )}
    >
      {children}
    </Link>
  );
};

export const DesktopNavigation: FC = () => {
  return (
    <nav className="hidden text-sm font-medium text-neutral-800 dark:text-neutral-200 md:flex">
      {navigation.map((item) => (
        <NavItem key={item.href} href={item.href} target={item.target}>
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
};
