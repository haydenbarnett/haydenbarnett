import Link from 'next/link';
import { formatDateRange } from '@/utils/formatting';
import { Seo } from './Seo';
import { Prose } from './Prose';
import { Tag } from './Tag';
import type { FC, ReactNode } from 'react';
import type { DocumentProps } from '@/types/documents';

type ArticleLayoutProps = {
  children?: ReactNode;
  meta: DocumentProps;
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({ children, meta }) => {
  const dateRange = formatDateRange(meta);
  const { company, description, preview, href, tags } = meta;

  return (
    <>
      <Seo title={company} description={description} image={preview} />
      <article className="flex max-w-3xl flex-col gap-4 px-6 pb-24">
        <h1 className="text-base font-medium text-white">
          {href ? (
            <Link href={href} target="_blank">
              {company}
            </Link>
          ) : (
            company
          )}
        </h1>
        <time className="text-sm">{dateRange}</time>
        <p className="text-sm">{description}</p>
        {tags?.length ? (
          <div className="flex flex-wrap gap-4 pt-8">
            {tags.map((instance, index) => (
              <Tag key={index}>{instance}</Tag>
            ))}
          </div>
        ) : null}
        <Prose>{children}</Prose>
      </article>
    </>
  );
};
