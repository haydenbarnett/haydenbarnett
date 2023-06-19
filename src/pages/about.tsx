import { PageLayout, ProjectsList, Seo, WorkList } from '@/components';
import { getAllEntries } from '@/utils/entries';
import { config } from '@/data';
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
        <h2 className="mt-6 text-base font-medium text-white">Work History</h2>
        <WorkList documents={documents} />
        <h2 className="mt-6 text-base font-medium text-white">
          Personal Projects
        </h2>
        <ProjectsList />
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
