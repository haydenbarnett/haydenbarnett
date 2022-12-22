import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

import type { ProjectDataProps } from '../data';
import { projects } from '../data';
import { Button } from './Button';

const ProjectRow: FC<{
  project: ProjectDataProps;
}> = ({ project }) => {
  const { logo, link, name } = project;

  const row = (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-300 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
        {logo && (
          <Image src={logo} alt="" className="h-6 w-6" width={24} height={24} />
        )}
        {!logo && link?.href && (
          <Image
            src={`${link.href}/favicon.ico`}
            alt=""
            width={24}
            height={24}
          />
        )}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {name}
        </span>
        <span className="text-xs text-zinc-500 transition group-hover:text-zinc-800 dark:group-hover:text-zinc-200">
          {link?.label ?? 'Coming soon'}
        </span>
      </div>
    </>
  );

  if (link?.href) {
    return (
      <Link href={link.href} target="_blank" className="group flex gap-4">
        {row}
      </Link>
    );
  }

  return row;
};

export const ProjectsPreview: FC = () => (
  <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-800">
    <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
      <RocketLaunchIcon className="h-5 w-5" />
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
