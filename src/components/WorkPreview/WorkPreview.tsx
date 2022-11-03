import type { FC } from 'react';
import Image from 'next/image';

import { ArrowDownIcon, BriefcaseIcon } from '../Icons';
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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-gray-300 dark:bg-gray-800/50 dark:text-white dark:ring-gray-800">
        {logo && <Image src={logo} alt="" className="h-6 w-6" unoptimized />}
      </div>
      <div className="flex flex-auto flex-wrap gap-x-2">
        <div className="flex w-full justify-between">
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {company}
          </span>
          <span className="text-xs text-gray-500">
            <time>{formatDateRange(document)}</time>
          </span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">{role}</span>
      </div>
    </>
  );
};

type WorkPreviewProps = {
  documents?: DocumentProps[];
};

export const WorkPreview: FC<WorkPreviewProps> = ({ documents }) => {
  return (
    <div className="rounded-2xl p-6 ring-1 ring-gray-300 dark:ring-gray-800">
      <h2 className="flex text-sm font-semibold text-gray-800 dark:text-gray-200">
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
        <ArrowDownIcon className="h-4 w-4 stroke-current opacity-50 transition" />
      </Button>
    </div>
  );
};
