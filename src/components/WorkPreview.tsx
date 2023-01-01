import type { FC } from 'react';
import Image from 'next/image';
import { BriefcaseIcon } from '@heroicons/react/20/solid';

import type { WorkPost } from 'contentlayer/generated';
import { allWorkPosts } from 'contentlayer/generated';
import { resume } from '../data';
import { Button } from './Button';

const WorkRow: FC<{
  document: WorkPost;
}> = ({ document }) => {
  const { logo, company, role, start, end } = document;

  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-300 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
        {logo && (
          <Image src={logo} alt="" className="h-6 w-6" width={24} height={24} />
        )}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full justify-between">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {company}
          </span>
          <span className="text-xs text-zinc-500">
            {start} → {end ?? 'Present'}
          </span>
        </div>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{role}</span>
      </div>
    </>
  );
};

export const WorkPreview: FC = () => (
  <div className="rounded-2xl p-6 ring-1 ring-zinc-300 dark:ring-zinc-800">
    <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
      <BriefcaseIcon className="h-5 w-5" />
      Work
    </h2>
    <ol className="mt-6 space-y-4">
      {allWorkPosts.slice(0, 5).map((document, index) => (
        <li key={index} className="flex gap-4">
          <WorkRow document={document} />
        </li>
      ))}
    </ol>
    <Button href={resume} className="mt-6 w-full">
      Download Résumé
    </Button>
  </div>
);
