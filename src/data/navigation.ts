import { resume } from './resume';

type NavigationDataProps = {
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
    label: 'Personal Projects',
  },
  {
    id: 'resume',
    href: resume,
    label: 'Résumé',
    target: '_blank',
  },
];
