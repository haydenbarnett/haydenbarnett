/* eslint-disable */
import * as path from 'path';
import glob from 'fast-glob';

const importEntry = async (filename: string, directory = 'work') => {
  const { meta, default: component } = await import(
    `../pages/${directory}/${filename}`
  );
  return {
    slug: filename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
};

export const getAllEntries = async (directory = 'work') => {
  const entryFilenames = await glob(['*.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/${directory}`),
  });

  const entries = await Promise.all(
    entryFilenames.map(async (filename) => importEntry(filename, directory))
  );

  return entries.sort((a, z) => parseInt(z.start) - parseInt(a.start));
};
