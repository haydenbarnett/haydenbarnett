import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { config } from '@/data/config';
import { ChevronRightIcon, HorizontalDotsIcon, UserIcon } from './Icons';
import { Globe } from './Globe';
import type { FC } from 'react';

type HeaderLinkProps = {
  readonly href: string;
  readonly title?: string;
  readonly entity?: string;
  readonly className?: string;
  readonly isActive?: boolean;
  readonly onMouseOver?: () => void;
  readonly onMouseOut?: () => void;
};

const HeaderLink: FC<HeaderLinkProps> = ({
  href,
  title,
  entity,
  className,
  isActive,
  onMouseOver,
  onMouseOut,
}) => (
  <Link
    href={href}
    className={clsx(
      'group inline-flex w-fit items-center gap-4 py-2',
      className
    )}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
  >
    <span
      className={clsx(
        isActive && 'text-white',
        'text-sm transition-colors group-hover:text-white'
      )}
    >
      {title} <span className="flex lg:inline-flex">— {entity}</span>
    </span>
  </Link>
);

export const Header: FC = () => {
  const { pathname } = useRouter();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

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
    <>
      <header className="relative inline-flex flex-col md:pl-10">
        <Link
          href={PATH.home}
          className="peer/home group inline-flex w-fit flex-col gap-4 pb-1.5"
          onMouseOver={() => {
            setLat(config.personal.lat);
            setLong(config.personal.long);
          }}
          onMouseOut={() => {
            setLat(0);
            setLong(0);
          }}
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
            {config.personal.name}
          </h1>
        </Link>
        <HeaderLink
          isActive={pathname === PATH.work}
          href={PATH.work}
          title={config.company.title}
          entity={config.company.name}
          className="peer/work"
          onMouseOver={() => {
            setLat(config.company.lat);
            setLong(config.company.long);
          }}
          onMouseOut={() => {
            setLat(0);
            setLong(0);
          }}
        />
        <HeaderLink
          isActive={pathname === PATH.studio}
          href={PATH.studio}
          title="After hours"
          entity={config.studio.name}
          className="peer/studio"
          onMouseOver={() => {
            setLat(config.studio.lat);
            setLong(config.studio.long);
          }}
          onMouseOut={() => {
            setLat(0);
            setLong(0);
          }}
        />
        <Link
          href={PATH.about}
          className="peer/about group inline-flex w-[80px] items-center gap-4 py-1.5"
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
      <div
        className={clsx(
          'pointer-events-none fixed -right-24 top-[25vh] w-full transition-opacity sm:pointer-events-auto md:-bottom-48 md:-right-48 md:max-w-[768px] lg:max-w-[1024px]',
          pathname !== PATH.home && 'z-[-1] opacity-30'
        )}
      >
        <Globe lat={lat} long={long} />
      </div>
    </>
  );
};
