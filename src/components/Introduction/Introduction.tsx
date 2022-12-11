import type { FC } from 'react';
import Image from 'next/image';
import { BriefcaseIcon, HomeIcon } from '@heroicons/react/20/solid';

import { Container } from '../Container';
import { SocialLink } from '../SocialLink';
import { author, social } from '@/data';
import wave from '@/images/wave.png';

type IntroductionProps = {
  className?: string;
};

export const Introduction: FC<IntroductionProps> = ({ className }) => {
  const { name, description, company, location } = author;

  return (
    <Container className={className}>
      <div className="rounded-2xl px-6 pb-20 pt-24 ring-1 ring-neutral-300 dark:ring-neutral-800">
        <div className="mx-auto max-w-[620px] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-5xl">
            <span className="inline-flex flex-col items-center gap-4 sm:flex-row">
              <Image
                src={wave}
                alt=""
                className="inline-flex h-10 w-10 select-none sm:h-14 sm:w-14"
                priority
              />
              <span>Hi, I&apos;m {name}</span>
            </span>
          </h1>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-6">
            <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-300">
              <BriefcaseIcon className="h-5 w-5" />
              Working at {company}
            </p>
            <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-300">
              <HomeIcon className="h-5 w-5" />
              <span>Living in {location}</span>
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            {social.map(({ href, label, icon }) => (
              <SocialLink
                key={href}
                href={href}
                aria-label={label}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
