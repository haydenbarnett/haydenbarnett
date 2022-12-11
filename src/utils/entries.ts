import glob from 'fast-glob';
import * as path from 'path';

const importEntry = async (filename: string, directory = 'work') => {
  let { meta, default: component } = await import(
    `../pages/${directory}/${filename}`
  );
  return {
    slug: filename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
};

export const getAllEntries = async (directory = 'work') => {
  let entryFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), `src/pages/${directory}`),
  });

  let entries = await Promise.all(
    entryFilenames.map((filename) => importEntry(filename, directory))
  );

  return entries.sort((a, z) => parseInt(z.start) - parseInt(a.start));
};
