type Client = {
  name: string;
  logo: string;
};

export type DocumentProps = {
  slug: string;
  logo?: string;
  preview?: string;
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
  clients?: Client[];
};
