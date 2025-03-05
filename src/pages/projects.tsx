import { PageLayout } from '@/components/page-layout';
import { ProjectsList } from '@/components/projects-list';
import { Seo } from '@/components/seo';
import type { FC } from 'react';

const Projects: FC = () => (
  <>
    <Seo
      title="Personal Projects"
      description="Things I've made to help others or just for fun."
    />
    <PageLayout title="Personal Projects">
      <ProjectsList />
    </PageLayout>
  </>
);

export default Projects;
