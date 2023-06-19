import Link from 'next/link';
import { formatDateRange } from '@/utils/formatting';
import { Seo } from './Seo';
import { Prose } from './Prose';
import { Tag } from './Tag';
import { LinkIcon } from './Icons';
import type { FC, ReactNode } from 'react';
import type { DocumentProps } from '@/types/documents';

type ArticleLayoutProps = {
  children?: ReactNode;
  meta: DocumentProps;
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({ children, meta }) => {
  const dateRange = formatDateRange(meta);
  const { company, description, preview, link, tags } = meta;

  return (
    <>
      <Seo title={company} description={description} image={preview} />
      <article className="flex max-w-3xl flex-col gap-4 px-6 pb-12 md:pb-24">
        <h1 className="text-base font-medium text-white">
          {link?.href ? (
            <Link
              href={link.href}
              target="_blank"
              className="group relative flex flex-col gap-1 md:flex-row md:items-center md:gap-0"
            >
              <LinkIcon className="transition-opacity group-hover:opacity-100 md:absolute md:right-full md:mr-4 md:opacity-0" />
              <span className="transition-opacity group-hover:opacity-0">
                {company}
              </span>
              <span className="absolute left-0 text-sm font-normal opacity-0 transition-opacity group-hover:opacity-100">
                {link.label}
              </span>
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
