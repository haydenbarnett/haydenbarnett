import { PageLayout, Seo } from '@/components';
import { getAllEntries } from '@/utils/entries';
import { formatDateRange } from '@/utils/formatting';
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
      <div className="flex flex-col gap-4">
        {documents.map((document) => {
          const { slug, company } = document;
          const dateRange = formatDateRange(document);
          return (
            <div key={slug} className="flex w-96 items-center justify-between">
              <div>
                <span>{company}</span>
              </div>
              <div>{dateRange}</div>
            </div>
          );
        })}
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

export default WorkPage;
