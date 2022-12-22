import type { FC } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  icon: FC<{ className?: string }>;
  href: string;
};

export const SocialLink: FC<SocialLinkProps> = ({ icon: Icon, ...props }) => (
  <Link
    className="p-0.5 text-zinc-500 transition hover:text-zinc-800 dark:hover:text-zinc-200"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    <Icon className="h-5 w-5" />
  </Link>
);
