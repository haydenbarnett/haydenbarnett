import type { FC } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

import {
  DribbbleIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../components/SocialIcons';

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
    href: 'https://dribbble.com/haydenbarnett',
    label: 'Dribbble',
    icon: DribbbleIcon,
  },
  {
    href: 'https://www.linkedin.com/in/haydenbarnett/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://www.instagram.com/hayden_jb/',
    label: 'Instagram',
    icon: InstagramIcon,
  },
  {
    href: 'mailto:hello@haydenbarnett.com',
    label: 'Email',
    icon: EnvelopeIcon,
  },
];
