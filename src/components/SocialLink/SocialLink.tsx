import type { FC } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  icon?: any;
  href: string;
};

export const SocialLink: FC<SocialLinkProps> = ({ icon: Icon, ...props }) => {
  return (
    <Link
      className="p-0.5 text-gray-600 transition hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-500"
      {...props}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};
