import type { FC } from 'react';

import { SimpleLayout } from '@/components';

const NotFound: FC = () => {
  return (
    <SimpleLayout>
      <h1 className="text-center text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
        Page not found
      </h1>
    </SimpleLayout>
  );
};

export default NotFound;
