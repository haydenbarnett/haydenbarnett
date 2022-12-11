import type { FC } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  icon?: any;
  href: string;
};

export const SocialLink: FC<SocialLinkProps> = ({ icon: Icon, ...props }) => {
  return (
    <Link
      className="p-0.5 text-neutral-500 transition hover:text-neutral-800 dark:hover:text-neutral-200"
      {...props}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
