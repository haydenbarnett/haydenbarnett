import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronRightIcon, LinkIcon } from '@heroicons/react/20/solid';

import type { GetStaticProps } from 'next';
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
import { getAllEntries } from '@/utils/entries';
import { formatDateRange } from '@/utils/formatting';
import { author, resume } from '@/data';
import type { DocumentProps } from '@/types/documents';

type DocumentRowProps = {
  document: DocumentProps;
  slug?: string;
  href?: string;
};

const DocumentRow: FC<DocumentRowProps> = ({ document }) => {
  const { logo, slug, href, company, role, description, tags } = document;
  const title = `${company} ${role && '•'} ${role}`;
  const dateRange = formatDateRange(document);
  const hasCaseStudy = slug && tags?.length;
  const link = hasCaseStudy ? `/work/${slug}` : href;
  const target = !hasCaseStudy && href ? '_blank' : undefined;

  return (
    <Card>
      <CardLogoPanel>
        {logo && <Image src={logo} width="48" height="48" alt="" unoptimized />}
      </CardLogoPanel>
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

type WorkPageProps = {
  documents: DocumentProps[];
};

const WorkPage: FC<WorkPageProps> = ({ documents }) => (
  <>
    <Head>
      <title>{`Work - ${author.name}`}</title>
      <meta name="description" content="" />
    </Head>
    <SimpleLayout title="Work" intro="">
      <div className="grid grid-cols-2 flex-col gap-16">
        {documents.map((document) => {
          const { slug } = document;

          return <DocumentRow key={slug} document={document} />;
        })}
      </div>
      <div className="mt-16 flex justify-center">
        <Button href={resume} target="_blank">
          Download Résumé
        </Button>
      </div>
    </SimpleLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    documents: (await getAllEntries('work')).map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ component, ...meta }) => meta as DocumentProps
    ),
  },
});

export default WorkPage;
