import { PageLayout, ProjectsList, Seo, WorkList } from '@/components';
import { getAllEntries } from '@/utils/entries';
import { config } from '@/data';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import type { WorkProps } from '@/types/work';

type AboutPageProps = {
  readonly work: WorkProps[];
};

const AboutPage: FC<AboutPageProps> = ({ work }) => (
  <>
    <Seo title="About" />
    <PageLayout title="About">
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-7">{config.meta.description}</p>
        <p className="text-sm leading-7">{config.personal.location}.</p>
        <h2 className="mt-6 text-base font-medium text-white">Work History</h2>
        <WorkList work={work} />
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
    work: (await getAllEntries('work')).map(
      // eslint-disable-next-line
      ({ component, ...meta }) => meta as WorkProps
    ),
  },
});

export default AboutPage;
