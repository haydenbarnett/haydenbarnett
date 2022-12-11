import type { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { Card, CardDescription, CardLink, SimpleLayout } from '@/components';
import { author, projects } from '@/data';
import { LinkIcon } from '@heroicons/react/20/solid';

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>{`Projects - ${author.name}`}</title>
        <meta
          name="description"
          content="Things I've made to help others or just for fun."
        />
      </Head>
      <SimpleLayout title="Things I've made to help others or just for fun.">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const { logo, link } = project;

            return (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-neutral-300 dark:bg-neutral-800 dark:ring-neutral-800">
                  {logo ? (
                    <Image src={logo} alt="" className="h-8 w-8" unoptimized />
                  ) : link?.href ? (
                    <Image
                      src={`${link.href}/favicon.ico`}
                      alt=""
                      width={32}
                      height={32}
                      unoptimized
                    />
                  ) : null}
                </div>
                <h2 className="mt-6 text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  {!!project.link?.href ? (
                    <CardLink href={project.link.href} target="_blank">
                      {project.name}
                    </CardLink>
                  ) : (
                    <>{project.name}</>
                  )}
                </h2>
                <CardDescription>{project.description}</CardDescription>
                <p className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-neutral-500 transition group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                  {!!project.link?.href && <LinkIcon className="h-4 w-4" />}
                  {project.link?.label}
                </p>
              </Card>
            );
          })}
        </ul>
      </SimpleLayout>
    </>
  );
};

export default Projects;
