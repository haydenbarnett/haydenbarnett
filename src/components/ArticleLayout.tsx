import type { FC, ReactNode } from 'react';
import Image from 'next/image';

import { Seo } from './Seo';
import { Container } from './Container';
import { Prose } from './Prose';
import { Tag } from './Tag';
import { Button } from './Button';
import { BackButton } from './BackButton';
import { formatDateRange } from '@/utils/formatting';
import type { DocumentProps } from '@/types/documents';

type ArticleLayoutProps = {
  children?: ReactNode;
  meta: DocumentProps;
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({ children, meta }) => {
  const dateRange = formatDateRange(meta);
  const { company, description, logo, preview, href, tags } = meta;

  return (
    <>
      <Seo title={company} description={description} image={preview} />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <BackButton href="/work" />
            <article>
              <header className="flex flex-col">
                <div className="flex items-center justify-between">
                  <time
                    dateTime={dateRange}
                    className="text-base text-zinc-500 dark:text-zinc-400"
                  >
                    {dateRange}
                  </time>
                  <Button href={href} target="_blank">
                    Visit website
                  </Button>
                </div>
                <h1 className="mt-12 flex items-center gap-5 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {logo && (
                    <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
                      <Image
                        src={logo}
                        alt=""
                        width="40"
                        height="40"
                        unoptimized
                      />
                    </div>
                  )}
                  <span>{company}</span>
                </h1>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-200">
                  {description}
                </p>
              </header>
              {tags?.length && (
                <div className="mt-12 flex flex-wrap gap-1.5">
                  {tags.map((instance, index) => (
                    <Tag key={index}>{instance}</Tag>
                  ))}
                </div>
              )}
              <Prose className="mt-8">
                {preview && (
                  <Image src={preview} width="672" height="672" alt="" />
                )}
                {children}
              </Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
};
