import type { FC } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

export type SocialDataProps = {
  href: string;
  label: string;
  icon: FC;
};

export const social: SocialDataProps[] = [
  {
    href: 'https://github.com/haydenbarnett',
    label: 'GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/haydenbarnett/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'mailto:hello@haydenbarnett.com',
    label: 'Email',
    icon: EnvelopeIcon,
  },
];
