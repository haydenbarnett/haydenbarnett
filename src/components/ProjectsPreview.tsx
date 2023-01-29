import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

import type { ProjectDataProps } from '../data';
import { projects } from '../data';
import { Button } from './Button';

type ProjectRowProps = {
  project: ProjectDataProps;
};

const ProjectRow: FC<ProjectRowProps> = ({ project }) => {
  const { logo, link, name } = project;

  const row = (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
        {logo || link?.href ? (
          <Image
            src={logo ?? (link ? `${link.href}/favicon.ico` : '')}
            alt=""
            width="24"
            height="24"
            unoptimized
          />
        ) : null}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-xs text-zinc-500 transition group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
          {link?.label ?? 'Coming soon'}
        </span>
      </div>
    </>
  );

  if (link?.href) {
    return (
      <Link
        href={link.href}
        target="_blank"
        className="group flex w-full gap-4 rounded-full outline-none focus-visible:shadow-focus"
      >
        {row}
      </Link>
    );
  }

  return row;
};

export const ProjectsPreview: FC = () => (
  <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
    <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
      <RocketLaunchIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      Personal Projects
    </h2>
    <ol className="mt-6 space-y-4">
      {projects.slice(0, 5).map((project, projectIndex) => (
        <li key={projectIndex} className="flex gap-4">
          <ProjectRow project={project} />
        </li>
      ))}
    </ol>
    <Button href="/projects" className="mt-6 w-full">
      View all
    </Button>
  </div>
);
