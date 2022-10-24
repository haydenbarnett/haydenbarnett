import corelliumLogo from '@/images/logos/corellium.svg';
import koalaLogo from '@/images/logos/koala.svg';
import surgeLogo from '@/images/logos/surge.svg';
import tyroLogo from '@/images/logos/tyro.png';
import redpinLogo from '@/images/logos/redpin.svg';
import gunmetalLogo from '@/images/logos/gunmetal.svg';
import nexbaLogo from '@/images/logos/nexba.svg';
import bsaLogo from '@/images/logos/bsa.svg';
import freelanceLogo from '@/images/avatar.jpg';

export type RoleProps = {
  logo: any;
  company: string;
  title: string;
  href?: string;
  description: string;
  start: string;
  end: string | { label: string; dateTime?: number };
  tags?: string[];
};

export const roles: RoleProps[] = [
  {
    logo: corelliumLogo,
    company: 'Corellium',
    title: 'Senior Frontend Engineer',
    href: 'https://corellium.com/',
    description:
      'Working with the newly formed frontend team on a range of new projects while also evolving and maintaining the existing core app.',
    start: '2021',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
    tags: [
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'Next.js',
      'Stripe',
      'Segment',
      'GTM',
      'Google Analytics',
    ],
  },
  {
    logo: koalaLogo,
    company: 'Koala',
    title: 'Senior UX Engineer',
    href: 'https://koala.com/en-au',
    description:
      'Joined at an exciting time right before the company underwent a rebrand, a launch into a new market and a complete digital transformation.',
    start: '2020',
    end: '2021',
  },
  {
    logo: surgeLogo,
    company: 'Surge',
    title: 'Creative Director',
    href: 'https://surge.studio/',
    description:
      'Co-founded growth marketing agency. Managing creative output - development, design & copywriting and video production. Clients include CSIRO/Data61, Waddle, TutorTime, Dysrupt Labs, Jellypepper.',
    start: '2018',
    end: '2021',
  },
  {
    logo: tyroLogo,
    company: 'Tyro',
    title: 'Frontend Developer',
    href: 'https://www.tyro.com/',
    description:
      'Tyro is an ASX listed company providing business focused payment, banking and lending products. I was the owner of the tyro.com website and responsible for frontend development, design & content including the launch of all digital, brand and customer marketing campaigns, projects, partnerships and initiatives.',
    start: '2016',
    end: '2020',
  },
  {
    logo: redpinLogo,
    company: 'Redpin Design',
    title: 'Frontend Developer',
    href: 'https://redpin.com.au/',
    description:
      'Worked on a range of projects involving web development, design, branding, edm campaigns & competitions. Clients include CASF, Sekisui, Tismor, CRC, OCP, Snack Brands, Green’s, Auspath & Pacefarm.',
    start: '2014',
    end: '2016',
  },
  {
    logo: gunmetalLogo,
    company: 'Gunmetal Studio',
    title: 'Partner',
    href: 'https://gunmetal.com.au/',
    description:
      'Co-founded a web design and development studio. We worked with a range of clients from startups to clothing brands and even big corporate and entertainment companies. Clients included National Geographic Channel, FX, Vimbra, Trekalo, Ryzer, Wild Animal Encounters.',
    start: '2013',
    end: '2014',
  },
  {
    logo: nexbaLogo,
    company: 'Nexba Beverages',
    title: 'Frontend Developer',
    href: 'https://www.nexba.com/',
    description:
      'Design and web development internship working on the Nexba eCommerce website.',
    start: '2013',
    end: '2013',
  },
  {
    logo: bsaLogo,
    company: 'BSA Limited',
    title: 'Motion Designer',
    href: 'https://www.bsa.com.au/',
    description:
      'Contract work on a variety of projects involving motion graphics, visual effects, graphic design and web development.',
    start: '2012',
    end: '2012',
  },
  {
    logo: freelanceLogo,
    company: 'Freelance',
    title: '',
    description:
      'Since the beginning of my career I have completed freelance work building websites and branding companies & startups. More recently the majority of this work shifted into my agency Surge. Some of my clients include Clipchamp, Tank Stream Ventures, Flaunter, Flirtey, Zibbet.',
    start: '2008',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
];
