export type ToolsDataProps = {
  name: string;
  tools: ToolsInstanceProps[];
};

export type ToolsInstanceProps = {
  logo?: string;
  name: string;
  href?: string;
};

export const tools: ToolsDataProps[] = [
  {
    name: 'Development',
    tools: [
      {
        logo: '/tools/html.svg',
        name: 'HTML',
      },
      {
        logo: '/tools/css.svg',
        name: 'CSS',
      },
      {
        logo: '/tools/scss.svg',
        name: 'SCSS',
      },
      {
        logo: '/tools/tailwindcss.svg',
        name: 'Tailwind',
      },
      {
        logo: '/tools/javascript.svg',
        name: 'JavaScript',
      },
      {
        logo: '/tools/typescript.svg',
        name: 'TypeScript',
      },
      {
        logo: '/tools/react.svg',
        name: 'React',
      },
      {
        logo: '/tools/next.svg',
        name: 'Next',
      },
      {
        logo: '/tools/vue.svg',
        name: 'Vue',
      },
      {
        logo: '/tools/nuxt.svg',
        name: 'Nuxt',
      },
      {
        logo: '/tools/storybook.svg',
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
      {
        name: 'Midjourney',
      },
    ],
  },
  {
    name: 'Analytics & SEO',
    tools: [
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
      {
        name: 'Ahrefs',
      },
    ],
  },
  {
    name: 'Services',
    tools: [
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
        name: 'Prismic',
      },
      {
        name: 'Contentful',
      },
    ],
  },
  {
    name: 'Apps',
    tools: [
      {
        name: 'Chrome',
      },
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
    ],
  },
  {
    name: 'Hardware',
    tools: [
      {
        name: 'iMac 24"',
      },
      {
        name: 'Macbook Air',
      },
      {
        name: 'iPad Pro',
      },
      {
        name: 'Gaming PC',
      },
      {
        name: 'Samsung A52',
      },
    ],
  },
];
