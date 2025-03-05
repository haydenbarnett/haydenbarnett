import { projects } from '@/data/projects';
import type { FC } from 'react';
import { Row } from './row';

type ProjectsListProps = {
  readonly studioOnly?: boolean;
};

export const ProjectsList: FC<ProjectsListProps> = ({ studioOnly }) => (
  <div className="flex flex-col">
    {projects
      .filter((project) => (studioOnly ? project.studio : true))
      .map((project) => {
        const { name, link, date } = project;
        return (
          <Row
            key={name}
            href={link?.href}
            hrefLabel={link?.label}
            title={name}
            date={date}
            isExternal
          />
        );
      })}
  </div>
);
