import html from '../images/tools/html.svg';
import css from '../images/tools/css.svg';
import scss from '../images/tools/scss.svg';
import tailwindcss from '../images/tools/tailwindcss.svg';
import javascript from '../images/tools/javascript.svg';
import typescript from '../images/tools/typescript.svg';
import react from '../images/tools/react.svg';
import next from '../images/tools/next.svg';
import vue from '../images/tools/vue.svg';
import nuxt from '../images/tools/nuxt.svg';
import storybook from '../images/tools/storybook.svg';

export type ToolsDataProps = {
  name: string;
  tools: ToolsInstanceProps[];
};

export type ToolsInstanceProps = {
  logo?: any;
  name: string;
  href?: string;
};

export const tools: ToolsDataProps[] = [
  {
    name: 'Development',
    tools: [
      {
        logo: html,
        name: 'HTML',
      },
      {
        logo: css,
        name: 'CSS',
      },
      {
        logo: scss,
        name: 'SCSS',
      },
      {
        logo: tailwindcss,
        name: 'Tailwind',
      },
      {
        logo: javascript,
        name: 'JavaScript',
      },
      {
        logo: typescript,
        name: 'TypeScript',
      },
      {
        logo: react,
        name: 'React',
      },
      {
        logo: next,
        name: 'Next',
      },
      {
        logo: vue,
        name: 'Vue',
      },
      {
        logo: nuxt,
        name: 'Nuxt',
      },
      {
        logo: storybook,
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
