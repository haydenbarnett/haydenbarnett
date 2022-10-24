import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';

import { ChevronDownIcon, CloseIcon } from '../Icons';
import { navigation } from '../../data';

type MobileNavItemProps = {
  href: string;
  target?: string;
  children?: ReactNode;
};

const MobileNavItem: FC<MobileNavItemProps> = ({ href, target, children }) => {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        target={target}
        className="block py-2"
      >
        {children}
      </Popover.Button>
    </li>
  );
};

type MobileNavigationProps = {
  className?: string;
};

export const MobileNavigation: FC<MobileNavigationProps> = (props) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-gray-500 group-hover:stroke-gray-700 dark:group-hover:stroke-gray-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-gray-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Menu
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-gray-100 text-base text-gray-800 dark:divide-gray-100/5 dark:text-gray-300">
                {navigation.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    href={item.href}
                    target={item.target}
                  >
                    {item.label}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};
