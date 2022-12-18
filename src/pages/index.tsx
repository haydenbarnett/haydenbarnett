import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import {
  Container,
  Button,
  Introduction,
  WorkPreview,
  Card,
  CardCta,
  CardDescription,
  CardTitle,
  ProjectsPreview,
  CardLogoPanel,
} from '@/components';
import { getAllEntries } from '@/utils/entries';
import { author } from '@/data';
import { DocumentProps } from '@/types/documents';

type CaseStudyPreviewProps = {
  document: DocumentProps;
};

const CaseStudyPreview: FC<CaseStudyPreviewProps> = ({ document }) => {
  const { logo, slug, company, description } = document;

  return (
    <Card>
      <CardLogoPanel>
        {logo && <Image src={logo} alt="" className="h-12 w-12" unoptimized />}
      </CardLogoPanel>
      <CardTitle href={`/work/${slug}`}>{company}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardCta>
        View case study <ChevronRightIcon className="h-4 w-4" />
      </CardCta>
    </Card>
  );
};

type HomeProps = {
  documents?: DocumentProps[];
};

const Home: FC<HomeProps> = ({ documents }) => {
  const { name, company, location } = author;

  return (
    <div className="flex flex-col gap-32 md:gap-48">
      <Head>
        <title>{`${name} - Frontend Engineer`}</title>
        <meta
          name="description"
          content={`I'm ${name}, a frontend engineer and digital designer currently working at ${company} and living in ${location}.`}
        />
      </Head>
      <Introduction className="mt-12 md:mt-32" />
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Read about my work
          </h2>
          <Button href="/work">View all</Button>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {documents
            ?.filter((document) => document.tags?.length)
            .slice(0, 2)
            .map((document: DocumentProps) => (
              <div className="col-span-1" key={document.slug}>
                <CaseStudyPreview document={document} />
              </div>
            ))}
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-48">
          <div className="col-span-1">
            <WorkPreview documents={documents} />
          </div>
          <div className="col-span-1">
            <ProjectsPreview />
          </div>
        </div>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      documents: (await getAllEntries('work'))
        .slice(0, 5)
        .map(({ component, ...meta }) => meta),
    },
  };
}

export default Home;
