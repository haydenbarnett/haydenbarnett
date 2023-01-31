import type { FC } from 'react';
import type { GetStaticProps } from 'next';

import {
  Container,
  Button,
  Introduction,
  WorkPreview,
  ProjectsPreview,
  WorkCard,
  Seo,
} from '@/components';
import { getAllEntries } from '@/utils/entries';
import type { DocumentProps } from '@/types/documents';

type HomeProps = {
  documents?: DocumentProps[];
};

const Home: FC<HomeProps> = ({ documents }) => (
  <>
    <Seo />
    <div className="flex flex-col gap-32 md:gap-48">
      <Introduction className="mt-12 md:mt-32" />
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Read about my work
          </h2>
          <Button href="/work">View all</Button>
        </div>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          {documents
            ?.filter((document) => document.tags?.length)
            .slice(0, 2)
            .map((document: DocumentProps) => (
              <div className="col-span-1" key={document.slug}>
                <WorkCard document={document} />
              </div>
            ))}
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
          <div className="col-span-1">
            <WorkPreview documents={documents} />
          </div>
          <div className="col-span-1">
            <ProjectsPreview />
          </div>
        </div>
      </Container>
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    documents: (await getAllEntries('work'))
      .slice(0, 5)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ component, ...meta }) => meta as DocumentProps),
  },
});

export default Home;
