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
  const isActive = useRouter().pathname === href;

  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        'flex items-center whitespace-nowrap rounded-md px-3 py-1 outline-none transition focus-visible:shadow-focus',
        isActive
          ? 'text-zinc-800 dark:text-zinc-200'
          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
      )}
    >
      {children}
    </Link>
  );
};

export const DesktopNavigation: FC = () => (
  <nav className="hidden text-sm font-medium text-zinc-800 dark:text-zinc-200 md:flex">
    {navigation.map((item) => (
      <NavItem key={item.href} href={item.href} target={item.target}>
        {item.label}
      </NavItem>
    ))}
  </nav>
);
