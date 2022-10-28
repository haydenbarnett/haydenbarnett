import type { FC, ReactNode } from 'react';
import Head from 'next/head';

import {
  Card,
  CardDescription,
  CardTitle,
  Section,
  SimpleLayout,
} from '@/components';
import { author, tools } from '@/data';

type ToolsSectionProps = {
  title?: string;
  children?: ReactNode;
};

const ToolsSection: FC<ToolsSectionProps> = ({ children, title }) => {
  return (
    <Section title={title}>
      <ul role="list" className="space-y-4">
        {children}
      </ul>
    </Section>
  );
};

type ToolProps = {
  title?: string;
  href?: string;
  children?: ReactNode;
};

const Tool: FC<ToolProps> = ({ title, href, children }) => {
  return (
    <Card as="li">
      <CardTitle as="h3" href={href}>
        {title}
      </CardTitle>
      <CardDescription>{children}</CardDescription>
    </Card>
  );
};

const Tools: FC = () => {
  return (
    <>
      <Head>
        <title>{`Tools - ${author.name}`}</title>
        <meta name="description" content="Things I use &amp; recommend." />
      </Head>
      <SimpleLayout title="Apps, solutions &amp; services that I use.">
        <div className="space-y-20">
          {tools.map((category) => (
            <ToolsSection title={category.name} key={category.name}>
              {category.tools.map((tool, index) => (
                <Tool key={index} title={tool.name} />
              ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  );
};

export default Tools;
