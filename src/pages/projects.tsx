import { PageLayout, ProjectsList, Seo } from '@/components';
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
