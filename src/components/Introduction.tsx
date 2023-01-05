import type { FC } from 'react';
import Image from 'next/image';
import { BriefcaseIcon, HomeIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import { Container } from './Container';
import { author, social } from '@/data';

type IntroductionProps = {
  className?: string;
};

export const Introduction: FC<IntroductionProps> = ({ className }) => {
  const { name, description, company, location } = author;

  return (
    <Container className={className}>
      <div className="rounded-2xl px-6 pb-20 pt-24 ring-1 ring-zinc-300 dark:ring-zinc-800">
        <div className="mx-auto max-w-[620px] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl">
            <span className="inline-flex flex-col items-center gap-4 sm:flex-row">
              <Image
                src="/wave.png"
                alt=""
                className="inline-flex animate-wave select-none sm:h-14 sm:w-14"
                width="40"
                height="40"
                priority
              />
              <span>Hi, I&apos;m {name}</span>
            </span>
          </h1>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-6">
            <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-300">
              <BriefcaseIcon className="h-5 w-5 text-zinc-500" />
              Working at {company}
            </p>
            <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-300">
              <HomeIcon className="h-5 w-5 text-zinc-500" />
              <span>Living in {location}</span>
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            {social.map(({ href, label, icon: SocialIcon }) => (
              <Link
                className="h-5 w-5 rounded-md p-0.5 text-zinc-500 outline-none transition hover:text-zinc-800 focus-visible:shadow-focus dark:hover:text-zinc-200"
                key={href}
                href={href}
                aria-label={label}
              >
                <SocialIcon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
