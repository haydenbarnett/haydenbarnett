import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';

import { navigation } from '@/data';

type MobileNavItemProps = {
  href: string;
  target?: string;
  children?: ReactNode;
};

const MobileNavItem: FC<MobileNavItemProps> = ({ href, target, children }) => (
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

export const MobileNavigation: FC = () => (
  <Popover className="pointer-events-auto md:hidden">
    <Popover.Button className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-800 ring-1 ring-zinc-200 transition hover:ring-zinc-400 dark:text-zinc-200 dark:ring-zinc-800 dark:hover:ring-zinc-700">
      Menu
      <ChevronDownIcon className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
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
        <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-200/50 backdrop-blur-sm dark:bg-black/50" />
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
          className="fixed inset-x-4 top-6 z-50 origin-top rounded-3xl bg-zinc-200/50 p-8 ring-1 ring-zinc-200 backdrop-blur-lg dark:bg-black/50 dark:ring-zinc-800"
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
              <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </Popover.Button>
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-zinc-300 text-base text-zinc-800 dark:divide-zinc-800 dark:text-zinc-200">
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
