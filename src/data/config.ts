type Entity = {
  name: string;
  title?: string;
  location: string;
  lat: number;
  long: number;
};

type ConfigDataProps = {
  personal: Entity;
  company: Entity;
  studio: Entity;
  meta: {
    title: string;
    description: string;
    color: string;
  };
};

export const config: ConfigDataProps = {
  personal: {
    name: 'Hayden Barnett',
    location: 'Sydney, Australia',
    lat: -33.8688,
    long: 151.2093,
  },
  company: {
    name: 'Corellium',
    title: 'Frontend Engineering Manager',
    location: 'Florida',
    lat: 26.4615,
    long: -80.0728,
  },
  studio: {
    name: 'Surge',
    title: 'Creative Director',
    location: 'Sydney, Australia',
    lat: -33.8688,
    long: 151.2093,
  },
  meta: {
    title: 'Frontend Engineer',
    description:
      'Senior frontend engineer focused on high quality UI/UX with over 10 years of experience building accessible and performant interfaces and design systems.',
    color: '#18181b',
  },
};
