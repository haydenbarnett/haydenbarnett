import type { WorkProps } from '@/types/work';
import { formatDateRange } from '@/utils/formatting';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { LinkIcon } from './Icons';
import { Prose } from './Prose';
import { Seo } from './Seo';
import { Tag } from './Tag';

type WorkLayoutProps = {
  readonly children?: ReactNode;
  readonly meta: WorkProps;
  readonly additionalContent?: ReactNode;
};

export const WorkLayout: FC<WorkLayoutProps> = ({
  children,
  meta,
  additionalContent,
}) => {
  const dateRange = formatDateRange(meta);
  const { company, description, link, tags } = meta;

  return (
    <>
      <Seo title={company} description={description} />
      <div className="relative flex max-w-3xl flex-col gap-4 px-6 pb-12 lg:pb-24">
        <h1 className="font-medium text-base text-white">
          {link?.href ? (
            <Link
              href={link.href}
              target="_blank"
              className="group relative inline-flex flex-col-reverse gap-1 md:flex-row md:items-center md:gap-0"
            >
              <LinkIcon className="h-5 w-5 transition-opacity group-hover:opacity-100 md:absolute md:right-full md:mr-4 md:opacity-0" />
              <span className="transition-opacity md:group-hover:opacity-0">
                {company}
              </span>
              <span className="absolute left-8 font-normal text-gray-400 text-sm leading-[20px] transition group-hover:text-white group-hover:opacity-100 md:left-0 md:opacity-0">
                {link.label}
              </span>
            </Link>
          ) : (
            company
          )}
        </h1>
        <time className="text-sm">{dateRange}</time>
        <p className="text-sm leading-7">{description}</p>
        {tags?.length ? (
          <div className="flex flex-wrap gap-2 pt-8">
            {tags.map((instance, index) => (
              <Tag key={index}>{instance}</Tag>
            ))}
          </div>
        ) : null}
        <Prose>{children}</Prose>
        {additionalContent}
      </div>
    </>
  );
};
