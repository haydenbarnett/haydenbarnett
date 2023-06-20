import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { config } from '@/data/config';
import { ChevronRightIcon, HorizontalDotsIcon, UserIcon } from './Icons';
import type { FC } from 'react';

type HeaderLinkProps = {
  href: string;
  title: string;
  company: string;
  className?: string;
  isActive?: boolean;
};

const HeaderLink: FC<HeaderLinkProps> = ({
  href,
  title,
  company,
  className,
  isActive,
}) => (
  <Link
    href={href}
    className={clsx('group inline-flex items-center gap-4 py-2', className)}
  >
    <span
      className={clsx(
        isActive && 'text-white',
        'text-sm transition-colors group-hover:text-white'
      )}
    >
      {title} <span className="flex lg:inline-flex">— {company}</span>
    </span>
  </Link>
);

export const Header: FC = () => {
  const { pathname } = useRouter();

  const PATH = {
    home: '/',
    work: '/work/corellium',
    studio: '/work/surge',
    about: '/about',
  };

  const iconClassName = clsx(
    'pointer-events-none absolute left-0 top-0 hidden shrink-0 transition lg:inline-flex',
    'peer-hover/home:translate-y-0 peer-hover/about:translate-y-[108px] peer-hover/studio:translate-y-[72px] peer-hover/work:translate-y-[36px]',
    pathname === PATH.work && 'translate-y-[36px]',
    pathname === PATH.studio && 'translate-y-[72px]',
    pathname === PATH.about && 'translate-y-[108px]'
  );

  return (
    <header className="group/noodles relative inline-flex flex-col md:pl-10">
      <Link
        href={PATH.home}
        className="peer/home group inline-flex flex-col gap-4 pb-1.5"
      >
        <UserIcon className="lg:hidden" />
        <h1
          className={clsx(
            (pathname === PATH.home ||
              (pathname !== PATH.work &&
                pathname !== PATH.studio &&
                pathname !== PATH.about)) &&
              'text-white',
            'text-base font-medium transition-colors hover:text-white'
          )}
        >
          {config.name}
        </h1>
      </Link>
      <HeaderLink
        isActive={pathname === PATH.work}
        href={PATH.work}
        title={config.title}
        company={config.company}
        className="peer/work"
      />
      <HeaderLink
        isActive={pathname === PATH.studio}
        href={PATH.studio}
        title="After hours"
        company={config.studio}
        className="peer/studio"
      />
      <Link
        href={PATH.about}
        className="peer/about group inline-flex items-center gap-4 py-1.5"
      >
        <div className="relative flex h-6 w-full items-center">
          <HorizontalDotsIcon
            className={clsx(
              pathname === PATH.about ? 'opacity-0' : 'group-hover:opacity-0',
              'transition-opacity'
            )}
          />
          <span
            className={clsx(
              pathname === PATH.about ? 'text-white' : 'opacity-0',
              'absolute left-0 text-sm transition-opacity group-hover:text-white group-hover:opacity-100'
            )}
          >
            View more
          </span>
        </div>
      </Link>
      <UserIcon
        className={clsx(
          iconClassName,
          pathname !== PATH.home && 'opacity-0',
          'peer-hover/about:opacity-0 peer-hover/home:opacity-100 peer-hover/studio:opacity-0 peer-hover/work:opacity-0'
        )}
      />
      <ChevronRightIcon
        className={clsx(
          iconClassName,
          (pathname === PATH.home ||
            (pathname !== PATH.work &&
              pathname !== PATH.studio &&
              pathname !== PATH.about)) &&
            'opacity-0',
          'peer-hover/about:opacity-100 peer-hover/home:opacity-0 peer-hover/studio:opacity-100 peer-hover/work:opacity-100'
        )}
      />
    </header>
  );
};
