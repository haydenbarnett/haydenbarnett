import Head from 'next/head';
import Image from 'next/image';
import {
  Card,
  CardCta,
  CardDescription,
  CardEyebrow,
  CardTitle,
  SimpleLayout,
  ArrowDownIcon,
  Button,
  CardLogoPanel,
} from '@/components';
import { getAllEntries } from '@/utils/entries';
import { findDocument, formatDateRange } from '@/utils/formatting';
import { author, resume, roles, RoleProps } from '@/data';
import { FC } from 'react';
import { DocumentProps } from '@/types/documents';

type RoleRowProps = {
  role: RoleProps;
  slug?: string;
  href?: string;
};

const RoleRow: FC<RoleRowProps> = ({ role, slug, href }) => {
  const { company, title, description } = role;
  const roleTitle = `${company} ${title && '•'} ${title}`;
  const dateRange = formatDateRange(role);
  const websiteCta = href ? <CardCta>Visit website</CardCta> : null;

  return (
    <Card>
      <CardLogoPanel>
        {role?.logo && (
          <Image src={role.logo} alt="" className="h-12 w-12" unoptimized />
        )}
      </CardLogoPanel>
      <CardTitle
        href={slug ? `/work/${slug}` : href}
        target={href && !slug ? '_blank' : undefined}
      >
        {roleTitle}
      </CardTitle>
      <CardEyebrow>{dateRange}</CardEyebrow>
      <CardDescription>{description}</CardDescription>
      {slug ? <CardCta>View case study</CardCta> : websiteCta}
    </Card>
  );
};

type WorkPageProps = {
  documents: DocumentProps[];
};

const WorkPage: FC<WorkPageProps> = ({ documents }) => {
  return (
    <>
      <Head>
        <title>{`Work - ${author.name}`}</title>
        <meta name="description" content="" />
      </Head>
      <SimpleLayout title="Work" intro="">
        <div className="grid grid-cols-2 flex-col gap-16">
          {roles.map((role, index) => {
            const document = findDocument(documents, role);
            const slug = document?.slug;
            const href = role.href;

            return (
              <RoleRow
                key={slug ?? index}
                role={role}
                slug={slug}
                href={href}
              />
            );
          })}
        </div>
        <div className="mt-16 flex justify-center">
          <Button href={resume} target="_blank">
            Download Résumé
            <ArrowDownIcon className="h-4 w-4 stroke-current opacity-50 transition" />
          </Button>
        </div>
      </SimpleLayout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      documents: (await getAllEntries('work')).map(
        ({ component, ...meta }) => meta
      ),
    },
  };
}

export default WorkPage;
