export type DocumentProps = {
  slug: string;
  logo?: any;
  preview?: any;
  company: string;
  description: string;
  role: string;
  href?: string;
  start: string;
  end: string | { label: string; dateTime?: number };
  tags?: string[];
};
