import Link from 'next/link';
import { Seo, PageLayout } from '@/components';
import { projects } from '@/data';
import type { FC } from 'react';

const Projects: FC = () => (
  <>
    <Seo
      title="Personal Projects"
      description="Things I've made to help others or just for fun."
    />
    <PageLayout title="Personal Projects">
      <div className="flex flex-col gap-4">
        {projects.map((project) => {
          const { name, link, date } = project;
          return (
            <div key={name} className="flex w-96 items-center justify-between">
              {link?.href ? (
                <Link
                  href={link.href}
                  className="hover:text-white"
                  target="_blank"
                >
                  <span>{name}</span>
                </Link>
              ) : (
                <div>{name}</div>
              )}
              <div>{date}</div>
            </div>
          );
        })}
      </div>
    </PageLayout>
  </>
);

export default Projects;
