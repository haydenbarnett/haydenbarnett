export type ConfigDataProps = {
  name: string;
  location: string;
  company: string;
  description: string;
  title: string;
  shortTitle: string;
  studio: string;
  color: string;
};

export const config: ConfigDataProps = {
  name: 'Hayden Barnett',
  location: 'Sydney, Australia',
  company: 'Corellium',
  title: 'Frontend Engineering Manager',
  shortTitle: 'Frontend Engineer',
  description:
    'Senior frontend engineer focused on high quality UI/UX with over 10 years of experience building accessible and performant interfaces and design systems.',
  studio: 'Surge',
  color: '#18181b',
};
