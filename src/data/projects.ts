import temploidLogo from '@/images/logos/temploid.svg';
import themeinkLogo from '@/images/logos/themeink.svg';
import imagepupLogo from '@/images/logos/imagepup.svg';

export type ProjectDataProps = {
  name: string;
  description?: string;
  logo?: any;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: ProjectDataProps[] = [
  {
    name: 'Temploid',
    description: 'Online video game publisher featuring three.js experiments.',
    logo: temploidLogo,
  },
  {
    name: 'Theme.ink',
    description:
      'A suite of tools to assist in the design and development process.',
    logo: themeinkLogo,
  },
  {
    name: 'Imagepup',
    description: 'A puppy themed vanilla image editor.',
    logo: imagepupLogo,
  },
  {
    name: 'Anna & Hayden',
    description:
      'A simple website to share our photos and videos from our wedding event.',
    link: { href: 'https://haydenandanna.com', label: 'haydenandanna.com' },
  },
  {
    name: 'Ben Wotton',
    description:
      'Portfolio website for Ben, a Senior Digital Compositor working in the film industry.',
    link: { href: 'https://benwotton.com', label: 'benwotton.com' },
  },
  {
    name: 'Anna Ji',
    description:
      'Short & sweet - straight to the point. Now am I talking about the website or my wife? :)',
    link: { href: 'https://annaphase.com', label: 'annaphase.com' },
  },
  {
    name: 'Free Game Assets',
    description:
      'A curated list of free resources and tools for game development.',
    link: {
      href: 'https://www.freegameassets.com',
      label: 'freegameassets.com',
    },
  },
  {
    name: 'Stormhyde',
    description:
      'Free software and resources created for animators for use with Autodesk Maya.',
    link: {
      href: 'https://www.stormhyde.com',
      label: 'stormhyde.com',
    },
  },
  {
    name: 'Barnetts Deniliquin',
    description:
      'The long standing family company with a history of sound and careful planning, expansion and contract delivery.',
    link: {
      href: 'https://barnettsdeniliquin.com',
      label: 'barnettsdeniliquin.com',
    },
  },
];
