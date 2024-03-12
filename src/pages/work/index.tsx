import { PageLayout, Seo, WorkList } from '@/components';
import { getAllEntries } from '@/utils/entries';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import type { WorkProps } from '@/types/work';

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
      // eslint-disable-next-line
      ({ component, ...meta }) => meta as WorkProps
    ),
  },
});

export default WorkPage;
