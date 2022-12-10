import type { FC } from 'react';
import Image from 'next/image';

import { BriefcaseIcon } from '../Icons';
import { Button } from '../Button';
import { formatDateRange } from '@/utils/formatting';
import { resume } from '../../data';
import { DocumentProps } from '@/types/documents';

type WorkRowProps = {
  document: DocumentProps;
};

const WorkRow: FC<WorkRowProps> = ({ document }) => {
  const { logo, company, role } = document;

  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-neutral-300 dark:bg-neutral-800 dark:text-white dark:ring-neutral-800">
        {logo && <Image src={logo} alt="" className="h-6 w-6" unoptimized />}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full justify-between">
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {company}
          </span>
          <span className="text-xs text-neutral-500">
            <time>{formatDateRange(document)}</time>
          </span>
        </div>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {role}
        </span>
      </div>
    </>
  );
};

type WorkPreviewProps = {
  documents?: DocumentProps[];
};

export const WorkPreview: FC<WorkPreviewProps> = ({ documents }) => {
  return (
    <div className="rounded-2xl p-6 ring-1 ring-neutral-300 dark:ring-neutral-800">
      <h2 className="flex text-sm font-semibold text-neutral-800 dark:text-neutral-200">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
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
};
