import { PageLayout } from '@/components/page-layout';
import { ProjectsList } from '@/components/projects-list';
import { Seo } from '@/components/seo';
import { WorkList } from '@/components/work-list';
import { config } from '@/data/config';
import type { WorkProps } from '@/types/work';
import { getAllEntries } from '@/utils/entries';
import type { GetStaticProps } from 'next';
import type { FC } from 'react';

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
        <h2 className="mt-6 font-medium text-base text-white">Work History</h2>
        <WorkList work={work} />
        <h2 className="mt-6 font-medium text-base text-white">
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
      ({ component, ...meta }) => meta as WorkProps
    ),
  },
});

export default AboutPage;
