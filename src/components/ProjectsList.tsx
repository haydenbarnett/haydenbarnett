import { projects } from '@/data';
import { Row } from './Row';
import type { FC } from 'react';

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
        />
      );
    })}
  </div>
);
