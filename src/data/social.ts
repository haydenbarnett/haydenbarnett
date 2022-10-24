import type { FC } from 'react';

import {
  DribbbleIcon,
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
} from '../components/Icons';

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
    href: 'mailto:hello@haydenbarnett.com',
    label: 'Email',
    icon: MailIcon,
  },
];
