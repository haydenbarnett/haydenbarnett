import type { FC } from 'react';
import Head from 'next/head';

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
} from '@/components';
import { getAllEntries } from '@/utils/entries';
import { author, social } from '@/data';
import { DocumentProps } from '@/types/documents';

type CaseStudyPreviewProps = {
  role: DocumentProps;
};

const CaseStudyPreview: FC<CaseStudyPreviewProps> = ({ role }) => {
  return (
    <Card>
      <CardTitle href={`/work/${role.slug}`}>{role.title}</CardTitle>
      <CardDescription>{role.description}</CardDescription>
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
      <Container className="mt-12 md:mt-48">
        <div className="rounded-2xl bg-gray-50 px-6 pb-20 pt-24 dark:bg-gray-800/50">
          <div className="mx-auto max-w-[620px] text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
              👋 Hi, I&apos;m {author.name}
            </h1>
            <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
              Senior frontend engineer focused on high quality UI/UX with over
              10 years of experience building accessible and performant
              interfaces and design systems.
            </p>
            <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-6">
              <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-blue-600 dark:bg-gray-900 dark:text-blue-500">
                <BriefcaseIcon className="h-5 w-5" />
                Working at Corellium
              </p>
              <p className="flex flex-wrap items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-emerald-600 dark:bg-gray-900 dark:text-emerald-500">
                <HomeIcon className="h-5 w-5" />
                <span>Living in Sydney, Australia</span>
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-6">
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
          <Button href="/work" variant="secondary">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {documents?.map((role: DocumentProps) => (
            <div className="col-span-1" key={role.slug}>
              <CaseStudyPreview role={role} />
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
