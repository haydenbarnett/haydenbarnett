import type { FC } from 'react';
import Image from 'next/image';

import { LinkIcon } from '@heroicons/react/20/solid';
import {
  Card,
  CardDescription,
  CardLink,
  Seo,
  SimpleLayout,
} from '@/components';
import { projects } from '@/data';

const Projects: FC = () => (
  <>
    <Seo
      title="Projects"
      description="Things I've made to help others or just for fun."
    />
    <SimpleLayout title="Things I've made to help others or just for fun.">
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const { logo, link } = project;

          return (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-zinc-200 dark:bg-zinc-800 dark:ring-zinc-800">
                {logo || link ? (
                  <Image
                    src={logo ?? (link ? `${link.href}/favicon.ico` : '')}
                    width="32"
                    height="32"
                    alt=""
                    unoptimized
                  />
                ) : null}
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.link?.href ? (
                  <CardLink href={project.link.href} target="_blank">
                    {project.name}
                  </CardLink>
                ) : (
                  project.name
                )}
              </h2>
              <CardDescription>{project.description}</CardDescription>
              <p className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                {Boolean(project.link?.href) && (
                  <LinkIcon className="h-4 w-4" />
                )}
                {project.link?.label}
              </p>
            </Card>
          );
        })}
      </ul>
    </SimpleLayout>
  </>
);

export default Projects;
