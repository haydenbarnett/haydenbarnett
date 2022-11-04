import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container } from '../Container';
import { Prose } from '../Prose';
import { ArrowLeftIcon } from '../Icons';
import { Tag } from '../Tag';
import { formatDateRange } from '@/utils/formatting';
import { DocumentProps } from '@/types/documents';
import { author } from '@/data';
import Image from 'next/image';

type ArticleLayoutProps = {
  children?: ReactNode;
  meta: DocumentProps;
  previousPathname?: string;
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  meta,
  previousPathname,
}) => {
  let router = useRouter();
  const dateRange = formatDateRange(meta);
  const { company, description, logo, tags } = meta;

  return (
    <>
      <Head>
        <title>{`${company} - ${author.name}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname ? (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-neutral-300 transition hover:ring-neutral-400 dark:ring-neutral-800 dark:hover:ring-neutral-700 lg:absolute lg:left-0 lg:mb-0 lg:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-800 dark:group-hover:stroke-neutral-300" />
              </button>
            ) : (
              <Link href="/work">
                <div className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-neutral-300 transition hover:ring-neutral-400 dark:ring-neutral-800 dark:hover:ring-neutral-700 lg:absolute lg:left-0 lg:mb-0 lg:mt-0">
                  <ArrowLeftIcon className="h-4 w-4 stroke-neutral-500 transition group-hover:stroke-neutral-800 dark:group-hover:stroke-neutral-300" />
                </div>
              </Link>
            )}
            <article>
              <header className="flex flex-col">
                <time
                  dateTime={dateRange}
                  className="flex items-center text-base text-neutral-500"
                >
                  <span>{dateRange}</span>
                </time>
                <h1 className="mt-12 flex items-center gap-5 text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
                  {logo && (
                    <div className="relative mt-1 flex h-16 w-16 flex-none items-center justify-center rounded-full ring-1 ring-neutral-300 dark:bg-neutral-800 dark:text-white dark:ring-neutral-800">
                      <Image
                        src={logo}
                        alt=""
                        className="h-10 w-10"
                        unoptimized
                      />
                    </div>
                  )}
                  <span>{company}</span>
                </h1>
                <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-200">
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
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
};
