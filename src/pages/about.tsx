import Link from 'next/link';
import { PageLayout, Seo } from '@/components';
import { getAllEntries } from '@/utils/entries';
import { config, projects } from '@/data';
import { formatDateRange } from '@/utils/formatting';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import type { DocumentProps } from '@/types/documents';

type AboutPageProps = {
  documents: DocumentProps[];
};

const AboutPage: FC<AboutPageProps> = ({ documents }) => (
  <>
    <Seo title="About" />
    <PageLayout title="About">
      <div className="flex flex-col gap-4">
        <p>{config.description}</p>
        <h1 className="mt-6 text-base font-medium text-white">History</h1>
        {documents.map((document) => {
          const { slug, company } = document;
          const dateRange = formatDateRange(document);
          return (
            <div key={slug} className="flex w-96 items-center justify-between">
              <div>
                <span>{company}</span>
              </div>
              <div>{dateRange}</div>
            </div>
          );
        })}
        <h1 className="mt-6 text-base font-medium text-white">
          Personal Projects
        </h1>
        {projects.map((project) => {
          const { name, link, date } = project;
          return (
            <div key={name} className="flex w-96 items-center justify-between">
              {link?.href ? (
                <Link
                  href={link.href}
                  className="hover:text-white"
                  target="_blank"
                >
                  <span>{name}</span>
                </Link>
              ) : (
                <div>{name}</div>
              )}
              <div>{date}</div>
            </div>
          );
        })}
      </div>
    </PageLayout>
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

export default AboutPage;
