export type ProjectDataProps = {
  name: string;
  description?: string;
  logo?: string;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: ProjectDataProps[] = [
  {
    name: 'Theme.ink (WIP)',
    description: 'Development tools and resources for the modern web.',
    logo: '/projects/themeink.svg',
    link: { href: 'https://theme.ink', label: 'theme.ink' },
  },
  {
    name: 'Evalyn AI',
    description: 'Say hello to Evalyn, your new AI companion.',
    logo: '/projects/evalyn.svg',
    link: { href: 'https://evalyn.ai', label: 'evalyn.ai' },
  },
  {
    name: 'Imagepup',
    description: 'My playground for AI generated imagery and associated tools.',
    logo: '/projects/imagepup.svg',
    link: { href: 'https://www.imagepup.com', label: 'imagepup.com' },
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
      'Short, sweet and straight to the point. Am I talking about the website or my wife? :)',
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
