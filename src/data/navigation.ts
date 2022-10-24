import { resume } from './resume';

export type NavigationDataProps = {
  id?: string;
  href: string;
  label: string;
  target?: string;
};

export const navigation: NavigationDataProps[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/work',
    label: 'Work',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/tools',
    label: 'Tools',
  },
  {
    id: 'resume',
    href: resume,
    label: 'Résumé',
    target: '_blank',
  },
];
