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
      <Popover.Button className="group flex items-center rounded-full px-4 py-2 text-sm font-medium text-neutral-800 ring-1 ring-neutral-300 transition hover:ring-neutral-400 dark:text-neutral-200 dark:ring-neutral-800 dark:hover:ring-neutral-700">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-neutral-500 group-hover:stroke-neutral-700 dark:group-hover:stroke-neutral-400" />
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
          <Popover.Overlay className="fixed inset-0 z-50 bg-neutral-200/50 backdrop-blur-sm dark:bg-black/50" />
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
            className="fixed inset-x-4 top-6 z-50 origin-top rounded-3xl bg-neutral-200/50 p-8 ring-1 ring-neutral-300 backdrop-blur-lg dark:bg-black/50 dark:ring-neutral-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
              </Popover.Button>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-neutral-300 text-base text-neutral-800 dark:divide-neutral-800 dark:text-neutral-200">
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
