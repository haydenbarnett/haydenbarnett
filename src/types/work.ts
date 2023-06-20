export type WorkProps = {
  published?: boolean;
  slug: string;
  logo?: string;
  company: string;
  description: string;
  role: string;
  link?: {
    href: string;
    label: string;
  };
  start: string;
  end: string | { label: string; dateTime?: number };
  tags?: string[];
  clients?: {
    name: string;
    logo: string;
  }[];
};
