import type { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import {
  Card,
  CardDescription,
  CardLink,
  SimpleLayout,
  LinkIcon,
} from '@/components';
import { author, projects } from '@/data';

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>{`Projects - ${author.name}`}</title>
        <meta
          name="description"
          content="Things I've made either to help others or just for fun."
        />
      </Head>
      <SimpleLayout title="Things I've made either to help others or just for fun.">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const { logo, link } = project;

            return (
              <Card as="li" key={project.name}>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gray-300 dark:ring-gray-800">
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
                <h2 className="mt-6 text-base font-semibold text-gray-800 dark:text-gray-100">
                  {!!project.link?.href ? (
                    <CardLink href={project.link.href} target="_blank">
                      {project.name}
                    </CardLink>
                  ) : (
                    <>
                      {project.name}{' '}
                      <span className="font-medium text-gray-400 dark:text-gray-300">
                        (WIP)
                      </span>
                    </>
                  )}
                </h2>
                <CardDescription>{project.description}</CardDescription>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-500 transition group-hover:text-gray-900 dark:group-hover:text-gray-200">
                  {!!project.link?.href && (
                    <LinkIcon className="h-6 w-6 flex-none" />
                  )}
                  <span className="ml-2">{project.link?.label}</span>
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
