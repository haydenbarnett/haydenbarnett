export type ToolsDataProps = {
  name: string;
  tools: ToolsInstanceProps[];
};

export type ToolsInstanceProps = {
  name: string;
  description?: string;
};

export const tools: ToolsDataProps[] = [
  {
    name: 'Development',
    tools: [
      {
        name: 'HTML / CSS / SCSS / Tailwind',
      },
      {
        name: 'JavaScript / TypeScript',
      },
      {
        name: 'React / Next.js',
      },
      {
        name: 'Vue / Nuxt',
      },
      {
        name: 'Storybook',
      },
    ],
  },
  {
    name: 'Design',
    tools: [
      {
        name: 'Figma',
      },
      {
        name: 'Adobe Photoshop',
      },
      {
        name: 'Adobe Illustrator',
      },
      {
        name: 'Adobe After Effects',
      },
      {
        name: 'Blender',
      },
    ],
  },
  {
    name: 'Apps & Services',
    tools: [
      {
        name: 'VS Code',
      },
      {
        name: 'Slack',
      },
      {
        name: 'GitHub Desktop',
      },
      {
        name: 'Spotify',
      },
      {
        name: 'GitHub',
      },
      {
        name: 'Vercel',
      },
      {
        name: 'Namecheap',
      },
      {
        name: 'Google Analytics',
      },
      {
        name: 'Google Tag Manager',
      },
      {
        name: 'Google Search Console',
      },
      {
        name: 'Segment',
      },
      {
        name: 'Semrush',
      },
    ],
  },
];
