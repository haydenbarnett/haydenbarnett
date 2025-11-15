type ProjectDataProps = {
  date: string;
  name: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
};

export const projects: ProjectDataProps[] = [
  {
    date: '2024',
    name: 'Elements',
    description: 'Animated AI visuals for your next project. Powered by Rive.',
    link: {
      href: 'https://elements.surge.studio',
      label: 'elements.surge.studio',
    },
  },
  {
    date: '2023',
    name: 'Theme.ink',
    description: 'Development tools and resources for the modern web.',
    link: { href: 'https://theme.ink', label: 'theme.ink' },
  },
  {
    date: '2023',
    name: 'Spark',
    description: 'An open source design system for all studio projects.',
    link: { href: 'https://spark.surge.studio', label: 'spark.surge.studio' },
  },
  {
    date: '2023',
    name: 'Eval AI',
    description: 'Say hello to Eval, your new AI companion.',
    link: { href: 'https://eval.surge.studio', label: 'eval.surge.studio' },
  },
  {
    date: '2023',
    name: 'Imagepup',
    description: 'Playground for AI generated imagery and associated tools.',
    link: { href: 'https://www.imagepup.com', label: 'imagepup.com' },
  },
  {
    date: '2022',
    name: 'Temploid',
    description: 'Play games for free online.',
    link: { href: 'https://www.temploid.com', label: 'temploid.com' },
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
];
