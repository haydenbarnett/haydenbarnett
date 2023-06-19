import { PageLayout, Seo, WorkList } from '@/components';
import { getAllEntries } from '@/utils/entries';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import type { DocumentProps } from '@/types/documents';

type WorkPageProps = {
  documents: DocumentProps[];
};

const WorkPage: FC<WorkPageProps> = ({ documents }) => (
  <>
    <Seo title="Work" />
    <PageLayout title="Work">
      <WorkList documents={documents} />
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

export default WorkPage;
