import type { FC } from 'react';
import Image from 'next/image';
import { BriefcaseIcon } from '@heroicons/react/20/solid';

import { resume } from '../data';
import { Button } from './Button';
import { formatDateRange } from '@/utils/formatting';
import type { DocumentProps } from '@/types/documents';

type WorkRowProps = {
  document: DocumentProps;
};

const WorkRow: FC<WorkRowProps> = ({ document }) => {
  const { logo, company, role } = document;

  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
        {logo && (
          <Image
            src={logo}
            width="24"
            height="24"
            alt=""
            className="h-6 w-6"
            unoptimized
          />
        )}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full justify-between">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {company}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            <time>{formatDateRange(document)}</time>
          </span>
        </div>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{role}</span>
      </div>
    </>
  );
};

type WorkPreviewProps = {
  documents?: DocumentProps[];
};

export const WorkPreview: FC<WorkPreviewProps> = ({ documents }) => (
  <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
    <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
      <BriefcaseIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      Work
    </h2>
    <ol className="mt-6 space-y-4">
      {documents?.slice(0, 5).map((document, index) => (
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
