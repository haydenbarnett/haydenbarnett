import type { FC } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, LinkIcon } from '@heroicons/react/20/solid';

import {
  Card,
  CardCta,
  CardDescription,
  CardEyebrow,
  CardTitle,
  CardImage,
} from '@/components';
import { formatDateRange } from '@/utils/formatting';
import type { DocumentProps } from '@/types/documents';

type WorkCardProps = {
  document: DocumentProps;
  slug?: string;
  href?: string;
};

export const WorkCard: FC<WorkCardProps> = ({ document }) => {
  const { preview, slug, href, company, role, description, tags } = document;
  const title = `${company} ${role && '•'} ${role}`;
  const dateRange = formatDateRange(document);
  const hasCaseStudy = slug && tags?.length;
  const link = hasCaseStudy ? `/work/${slug}` : href;
  const target = !hasCaseStudy && href ? '_blank' : undefined;

  return (
    <Card>
      {preview && (
        <CardImage>
          <Image src={preview} alt="" fill className="object-cover" />
        </CardImage>
      )}
      <CardTitle href={link} target={target}>
        {title}
      </CardTitle>
      <CardEyebrow>{dateRange}</CardEyebrow>
      <CardDescription>{description}</CardDescription>
      {hasCaseStudy && (
        <CardCta>
          View case study <ChevronRightIcon className="h-4 w-4" />
        </CardCta>
      )}
      {!hasCaseStudy && href && (
        <CardCta>
          <LinkIcon className="h-4 w-4" /> Visit website
        </CardCta>
      )}
    </Card>
  );
};
