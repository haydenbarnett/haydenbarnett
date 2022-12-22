import type { FC, ReactNode } from 'react';
import Head from 'next/head';

import Image from 'next/image';
import { Card, CardTitle, SimpleLayout } from '@/components';
import type { ToolsInstanceProps } from '@/data';
import { author, tools } from '@/data';

type ToolsSectionProps = {
  title?: string;
  children?: ReactNode;
};

const ToolsSection: FC<ToolsSectionProps> = ({ children, title }) => (
  <div className="grid w-full grid-cols-1 items-start gap-y-8 py-12 md:grid-cols-4">
    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
      {title}
    </h2>
    <div className="md:col-span-3">
      <div className="grid grid-cols-2 gap-12 md:grid-cols-3">{children}</div>
    </div>
  </div>
);

const Tool: FC<ToolsInstanceProps> = ({ logo, name, href }) => (
  <Card className="col-span-1">
    <CardTitle as="h3" href={href} target="_blank">
      {logo && <Image src={logo} alt="" className="h-6 w-6" unoptimized />}
      <span>{name}</span>
    </CardTitle>
  </Card>
);

const Tools: FC = () => (
  <>
    <Head>
      <title>{`Tools - ${author.name}`}</title>
      <meta
        name="description"
        content="Tools, apps, solutions &amp; services."
      />
    </Head>
    <SimpleLayout title="Tools, apps, solutions &amp; services.">
      <div className="divide-y divide-zinc-300 dark:divide-zinc-800">
        {tools.map((category) => (
          <ToolsSection title={category.name} key={category.name}>
            {category.tools.map((tool, index) => (
              <Tool key={index} {...tool} />
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  </>
);

export default Tools;
