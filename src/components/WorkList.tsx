import { formatDateRange } from '@/utils/formatting';
import { Row } from './Row';
import type { DocumentProps } from '@/types/documents';
import type { FC } from 'react';

type WorkListProps = {
  documents: DocumentProps[];
};

export const WorkList: FC<WorkListProps> = ({ documents }) => (
  <div className="flex flex-col">
    {documents.map((document) => {
      const { slug, company, link } = document;
      const dateRange = formatDateRange(document);
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
