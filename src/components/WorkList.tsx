import { formatDateRange } from '@/utils/formatting';
import { Row } from './Row';
import type { WorkProps } from '@/types/work';
import type { FC } from 'react';

type WorkListProps = {
  work: WorkProps[];
};

export const WorkList: FC<WorkListProps> = ({ work }) => (
  <div className="flex flex-col">
    {work.map((instance) => {
      const { slug, company, link } = instance;
      const dateRange = formatDateRange(instance);
      return (
        <Row
          key={slug}
          href={link?.href}
          hrefLabel={link?.label}
          title={company}
          date={dateRange}
        />
      );
    })}
  </div>
);
