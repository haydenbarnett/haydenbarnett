import type { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ArrowLeftIcon } from '../Icons';

type BackButtonProps = {
  previousPathname?: string;
  href: string;
};

export const BackButton: FC<BackButtonProps> = ({ previousPathname, href }) => {
  const router = useRouter();
  const className =
    'group mb-8 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-neutral-300 transition hover:ring-neutral-400 dark:ring-neutral-800 dark:hover:ring-neutral-700 lg:absolute lg:left-0 lg:mb-0 lg:mt-0';
  const icon = (
    <ArrowLeftIcon className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-800 dark:group-hover:stroke-neutral-300" />
  );

  console.log(previousPathname);

  if (previousPathname) {
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back"
      className={className}
    >
      {icon}
    </button>;
  }

  return (
    <Link href={href}>
      <div className={className}>{icon}</div>
    </Link>
  );
};
