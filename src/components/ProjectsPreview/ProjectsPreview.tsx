import type { FC } from 'react';
import Image from 'next/future/image';

import { RocketLaunchIcon } from '../Icons';
import { Button } from '../Button';
import { ProjectDataProps, projects } from '../../data';
import Link from 'next/link';

type ProjectRowProps = {
  project: ProjectDataProps;
};

const ProjectRow: FC<ProjectRowProps> = ({ project }) => {
  const { logo, link, name } = project;

  const row = (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
        {logo ? (
          <Image src={logo} alt="" className="h-6 w-6" unoptimized />
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
      <div className="flex flex-auto flex-wrap gap-x-2">
        <span className="w-full flex-none text-sm font-medium text-gray-900 dark:text-gray-100">
          {name}
        </span>
        <span className="text-xs text-gray-500 transition group-hover:text-blue-500 dark:text-gray-400">
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

  return <>{row}</>;
};

export const ProjectsPreview: FC = () => {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 dark:border-gray-700/40">
      <h2 className="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
        <RocketLaunchIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Personal Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.slice(0, 5).map((project, projectIndex) => (
          <li key={projectIndex} className="flex gap-4">
            <ProjectRow project={project} />
          </li>
        ))}
      </ol>
      <Button href="/projects" variant="secondary" className="mt-6 w-full">
        View all
      </Button>
    </div>
  );
};
