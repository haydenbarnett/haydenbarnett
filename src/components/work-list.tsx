import type { WorkProps } from '@/types/work';
import { formatDateRange } from '@/utils/formatting';
import type { FC } from 'react';
import { Row } from './row';

type WorkListProps = {
  readonly work: WorkProps[];
};

export const WorkList: FC<WorkListProps> = ({ work }) => (
  <div className="flex flex-col">
    {work.map((instance) => {
      const { slug, company, link, published } = instance;
      const dateRange = formatDateRange(instance);
      return (
        <Row
          key={slug}
          href={published ? `/work/${slug}` : link?.href}
          hrefLabel={published ? 'View case study' : link?.label}
          title={company}
          date={dateRange}
          isExternal={!published}
        />
      );
    })}
  </div>
);
