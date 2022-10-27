import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';

import {
  Container,
  Button,
  WorkPreview,
  SocialLink,
  Card,
  CardCta,
  CardDescription,
  CardTitle,
  ProjectsPreview,
  BriefcaseIcon,
  HomeIcon,
  CardLogoPanel,
} from '@/components';
import { getAllEntries } from '@/utils/entries';
import { author, social } from '@/data';
import { DocumentProps } from '@/types/documents';

import wave from '@/images/wave.png';
import { findRole } from '@/utils/formatting';

type CaseStudyPreviewProps = {
  document: DocumentProps;
};

const CaseStudyPreview: FC<CaseStudyPreviewProps> = ({ document }) => {
  const { slug, title, description } = document;
  const role = findRole(document);

  return (
    <Card>
      <CardLogoPanel>
        {role?.logo && (
          <Image src={role.logo} alt="" className="h-12 w-12" unoptimized />
        )}
      </CardLogoPanel>
      <CardTitle href={`/work/${slug}`}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardCta>View case study</CardCta>
    </Card>
  );
};

type HomeProps = {
  documents?: DocumentProps[];
};

const Home: FC<HomeProps> = ({ documents }) => {
  return (
    <div className="flex flex-col gap-32 md:gap-48">
      <Head>
        <title>{author.name} - Frontend Engineer</title>
        <meta
          name="description"
          content={`I'm ${author.name}, a frontend engineer and digital designer currently working at Corellium and living in Sydney, Australia.`}
        />
      </Head>
      <Container className="mt-12 md:mt-32">
        <div className="rounded-2xl border border-gray-300 px-6 pb-20 pt-24 dark:border-gray-800">
          <div className="mx-auto max-w-[620px] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
              <span className="inline-flex flex-col items-center gap-4 sm:flex-row">
                <Image
                  src={wave}
                  alt=""
                  className="inline-flex h-10 w-10 select-none sm:h-14 sm:w-14"
                  priority
                />
                <span>Hi, I&apos;m {author.name}</span>
              </span>
            </h1>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Senior frontend engineer focused on high quality UI/UX with over
              10 years of experience building accessible and performant
              interfaces and design systems.
            </p>
            <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-6">
              <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-gray-800 dark:text-gray-300">
                <BriefcaseIcon className="h-5 w-5" />
                Working at Corellium
              </p>
              <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-gray-800 dark:text-gray-300">
                <HomeIcon className="h-5 w-5" />
                <span>Living in Sydney, Australia</span>
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-6">
              {social.map((item) => (
                <SocialLink
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl">
            Read about my recent work
          </h2>
          <Button href="/work">View all</Button>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {documents?.map((document: DocumentProps) => (
            <div className="col-span-1" key={document.slug}>
              <CaseStudyPreview document={document} />
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-48">
          <div className="col-span-1">
            <WorkPreview />
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
