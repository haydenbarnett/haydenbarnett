import { PageLayout, Seo, WorkList } from '@/components';
import type { WorkProps } from '@/types/work';
import { getAllEntries } from '@/utils/entries';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

type WorkPageProps = {
  readonly work: WorkProps[];
};

const WorkPage: FC<WorkPageProps> = ({ work }) => (
  <>
    <Seo title="Work" />
    <PageLayout title="Work">
      <WorkList work={work} />
    </PageLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    work: (await getAllEntries('work')).map(
      ({ component, ...meta }) => meta as WorkProps
    ),
  },
});

export default WorkPage;
