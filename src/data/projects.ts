type ProjectDataProps = {
  date: string;
  name: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
  studio?: boolean;
};

export const projects: ProjectDataProps[] = [
  {
    date: '2023',
    name: 'Theme.ink',
    description: 'Development tools and resources for the modern web.',
    link: { href: 'https://theme.ink', label: 'theme.ink' },
    studio: true,
  },
  {
    date: '2023',
    name: 'Spark',
    description: 'An open source design system for all studio projects.',
    link: { href: 'https://spark.surge.studio', label: 'spark.surge.studio' },
    studio: true,
  },
  {
    date: '2023',
    name: 'Evalyn AI',
    description: 'Say hello to Evalyn, your new AI companion.',
    link: { href: 'https://evalyn.ai', label: 'evalyn.ai' },
    studio: true,
  },
  {
    date: '2023',
    name: 'Imagepup',
    description: 'Playground for AI generated imagery and associated tools.',
    link: { href: 'https://www.imagepup.com', label: 'imagepup.com' },
    studio: true,
  },
  {
    date: '2022',
    name: 'Anna & Hayden',
    description:
      'A simple website to share our photos and videos from our wedding event.',
    link: { href: 'https://haydenandanna.com', label: 'haydenandanna.com' },
  },
  {
    date: '2021',
    name: 'Anna Ji',
    description:
      'Short, sweet and straight to the point. Am I talking about the website or my wife? :)',
    link: { href: 'https://annaphase.com', label: 'annaphase.com' },
  },
  {
    date: '2019',
    name: 'Ben Wotton',
    description:
      'Portfolio website for Ben, a Senior Digital Compositor working in the film industry.',
    link: { href: 'https://benwotton.com', label: 'benwotton.com' },
  },
  {
    date: '2016',
    name: 'Free Game Assets',
    description:
      'A curated list of free resources and tools for game development.',
    link: {
      href: 'https://www.freegameassets.com',
      label: 'freegameassets.com',
    },
  },
  {
    date: '2011',
    name: 'Stormhyde',
    description:
      'Free software and resources created for animators for use with Autodesk Maya.',
    link: {
      href: 'https://www.stormhyde.com',
      label: 'stormhyde.com',
    },
  },
  {
    date: '2011',
    name: 'Barnetts Deniliquin',
    description:
      'The long standing family company with a history of sound and careful planning, expansion and contract delivery.',
    link: {
      href: 'https://barnettsdeniliquin.com',
      label: 'barnettsdeniliquin.com',
    },
  },
];
