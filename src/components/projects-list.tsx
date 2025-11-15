import { projects } from '@/data/projects';
import type { FC } from 'react';
import { Row } from './row';

export const ProjectsList: FC = () => (
  <div className="flex flex-col">
    {projects.map((project) => {
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
