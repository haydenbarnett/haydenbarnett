import type { FC, ReactNode } from 'react';
import { Container } from '@/components/Container';

type SimpleLayoutProps = {
  title?: string;
  intro?: string;
  children?: ReactNode;
};

export const SimpleLayout: FC<SimpleLayoutProps> = ({
  title,
  intro,
  children,
}) => {
  return (
    <Container className="mt-16 sm:mt-32">
      {(title || intro) && (
        <header className="max-w-[620px]">
          {title && (
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
              {title}
            </h1>
          )}
          {intro && (
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
              {intro}
            </p>
          )}
        </header>
      )}
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
};
