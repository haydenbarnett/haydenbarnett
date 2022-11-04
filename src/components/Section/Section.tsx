import type { FC, ReactNode } from 'react';
import { useId } from 'react';

type SectionProps = {
  title?: string;
  children?: ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => {
  let id = useId();

  return (
    <section aria-labelledby={id}>
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2
          id={id}
          className="text-sm font-semibold text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  );
};
