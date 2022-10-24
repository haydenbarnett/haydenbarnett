import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';

import { navigation } from '../../data';

type NavItemProps = {
  href: string;
  target?: string;
  children?: ReactNode;
};

const NavItem: FC<NavItemProps> = ({ href, target, children }) => {
  let isActive = useRouter().pathname === href;

  return (
    <li>
      <Link
        href={href}
        target={target}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-blue-500 dark:text-blue-400'
            : 'hover:text-blue-500 dark:hover:text-blue-400'
        )}
      >
        {children}
      </Link>
    </li>
  );
};

type DesktopNavigationProps = {
  className?: string;
};

export const DesktopNavigation: FC<DesktopNavigationProps> = (props) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-gray-800 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/50 dark:text-gray-200 dark:ring-white/10">
        {navigation.map((item) => (
          <NavItem key={item.href} href={item.href} target={item.target}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};
