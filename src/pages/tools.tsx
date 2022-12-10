import type { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Card, CardTitle, SimpleLayout } from '@/components';
import { author, tools, ToolsInstanceProps } from '@/data';
import Image from 'next/image';

type ToolsSectionProps = {
  title?: string;
  children?: ReactNode;
};

const ToolsSection: FC<ToolsSectionProps> = ({ children, title }) => {
  return (
    <div className="grid w-full grid-cols-1 items-start gap-y-8 py-12 md:grid-cols-4">
      <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
        {title}
      </h2>
      <div className="md:col-span-3">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">{children}</div>
      </div>
    </div>
  );
};

const Tool: FC<ToolsInstanceProps> = ({ logo, name, href }) => {
  return (
    <Card className="col-span-1">
      <CardTitle as="h3" href={href} target="_blank">
        {logo && <Image src={logo} alt="" className="h-6 w-6" unoptimized />}
        <span>{name}</span>
      </CardTitle>
    </Card>
  );
};

const Tools: FC = () => {
  return (
    <>
      <Head>
        <title>{`Tools - ${author.name}`}</title>
        <meta
          name="description"
          content="Apps, solutions &amp; services that I use."
        />
      </Head>
      <SimpleLayout title="Apps, solutions &amp; services that I use.">
        <div className="divide-y divide-neutral-300 dark:divide-neutral-800">
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
};

export default Tools;
