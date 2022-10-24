import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { Prose } from '@/components/Prose';
import { findRole, formatDateRange } from '@/utils/formatting';
import { ArrowLeftIcon } from '../Icons';
import { Tag } from '../Tag';
import { author } from '../../data';

type ArticleLayoutProps = {
  children?: ReactNode;
  meta?: any;
  previousPathname?: string;
};

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  children,
  meta,
  previousPathname,
}) => {
  let router = useRouter();
  const role = findRole(meta);
  const dateRange = formatDateRange(role);

  return (
    <>
      <Head>
        <title>{`${meta.title} - ${author.name}`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname ? (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-900/5 transition dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0 dark:ring-white/10 dark:hover:border-gray-700 dark:hover:ring-white/20 lg:absolute lg:left-0 lg:mb-0 lg:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700 dark:stroke-gray-500 dark:group-hover:stroke-gray-400" />
              </button>
            ) : (
              <Link href="/work">
                <div className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-900/5 transition dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0 dark:ring-white/10 dark:hover:border-gray-700 dark:hover:ring-white/20 lg:absolute lg:left-0 lg:mb-0 lg:mt-0">
                  <ArrowLeftIcon className="h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700 dark:stroke-gray-500 dark:group-hover:stroke-gray-400" />
                </div>
              </Link>
            )}
            <article>
              <header className="flex flex-col">
                <time
                  dateTime={dateRange}
                  className="flex items-center text-base text-gray-400 dark:text-gray-500"
                >
                  <span>{dateRange}</span>
                </time>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
                  {meta.description}
                </p>
              </header>
              {role?.tags?.length && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((instance) => (
                    <Tag>{instance}</Tag>
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
