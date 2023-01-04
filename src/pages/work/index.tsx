import type { FC } from 'react';
import Head from 'next/head';

import type { GetStaticProps } from 'next';
import { SimpleLayout, Button, WorkCard } from '@/components';
import { getAllEntries } from '@/utils/entries';
import { author, resume } from '@/data';
import type { DocumentProps } from '@/types/documents';

type WorkPageProps = {
  documents: DocumentProps[];
};

const WorkPage: FC<WorkPageProps> = ({ documents }) => (
  <>
    <Head>
      <title>{`Work - ${author.name}`}</title>
      <meta name="description" content="" />
    </Head>
    <SimpleLayout title="Work" intro="">
      <div className="grid grid-cols-2 flex-col gap-16">
        {documents.map((document) => {
          const { slug } = document;

          return <WorkCard key={slug} document={document} />;
        })}
      </div>
      <div className="mt-16 flex justify-center">
        <Button href={resume} target="_blank">
          Download Résumé
        </Button>
      </div>
    </SimpleLayout>
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
