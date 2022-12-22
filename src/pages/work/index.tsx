import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronRightIcon, LinkIcon } from '@heroicons/react/20/solid';

import type { WorkPost } from 'contentlayer/generated';
import { allWorkPosts } from 'contentlayer/generated';
import {
  Card,
  CardCta,
  CardDescription,
  CardEyebrow,
  CardTitle,
  SimpleLayout,
  Button,
  CardLogoPanel,
} from '@/components';
import { author, resume } from '@/data';
import type { DocumentProps } from '@/types/documents';

const sortByDate = (postA: WorkPost, postB: WorkPost) => {
  const dateA = new Date(postA.start);
  const dateB = new Date(postB.start);

  return dateB.getTime() - dateA.getTime();
};

const DocumentRow: FC<{
  document: WorkPost;
}> = ({ document }) => {
  const { logo, role, company, description, start, end, href, slug, body } =
    document;
  const title = [company, role].join(' • ');
  const dateRange = `${start} → ${end ?? 'Present'}`;
  const hasCaseStudy = body.raw.length;
  const link = hasCaseStudy ? slug : href;
  const target = hasCaseStudy ? undefined : href ? '_blank' : undefined;
  const cta = hasCaseStudy ? (
    <CardCta>
      View case study <ChevronRightIcon className="h-4 w-4" />
    </CardCta>
  ) : href ? (
    <CardCta>
      <LinkIcon className="h-4 w-4" /> Visit website
    </CardCta>
  ) : null;

  return (
    <Card>
      <CardLogoPanel>
        {logo && (
          <Image
            src={logo}
            alt=""
            className="h-12 w-12"
            width={48}
            height={48}
          />
        )}
      </CardLogoPanel>
      <CardTitle href={link} target={target}>
        {title}
      </CardTitle>
      <CardEyebrow>{dateRange}</CardEyebrow>
      <CardDescription>{description}</CardDescription>
      {cta}
    </Card>
  );
};

type WorkPageProps = {
  documents: DocumentProps[];
};

const WorkPage: FC<WorkPageProps> = () => (
  <>
    <Head>
      <title>{`Work - ${author.name}`}</title>
      <meta name="description" content="" />
    </Head>
    <SimpleLayout title="Work" intro="">
      <div className="grid grid-cols-2 flex-col gap-16">
        {allWorkPosts.sort(sortByDate).map((document) => (
          <DocumentRow key={document.slugAsParams} document={document} />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Button href={resume} target="_blank">
          Download Résumé
        </Button>
      </div>
    </SimpleLayout>
  </>
);

export default WorkPage;
