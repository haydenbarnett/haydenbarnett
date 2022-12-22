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
        logo: '/images/tools/html.svg',
        name: 'HTML',
      },
      {
        logo: '/images/tools/css.svg',
        name: 'CSS',
      },
      {
        logo: '/images/tools/scss.svg',
        name: 'SCSS',
      },
      {
        logo: '/images/tools/tailwindcss.svg',
        name: 'Tailwind',
      },
      {
        logo: '/images/tools/javascript.svg',
        name: 'JavaScript',
      },
      {
        logo: '/images/tools/typescript.svg',
        name: 'TypeScript',
      },
      {
        logo: '/images/tools/react.svg',
        name: 'React',
      },
      {
        logo: '/images/tools/next.svg',
        name: 'Next',
      },
      {
        logo: '/images/tools/vue.svg',
        name: 'Vue',
      },
      {
        logo: '/images/tools/nuxt.svg',
        name: 'Nuxt',
      },
      {
        logo: '/images/tools/storybook.svg',
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
