import type { FC } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  icon?: any;
  href: string;
};

export const SocialLink: FC<SocialLinkProps> = ({ icon: Icon, ...props }) => {
  return (
    <Link
      className="p-0.5 text-gray-500 transition hover:text-gray-800 dark:hover:text-gray-200"
      {...props}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
