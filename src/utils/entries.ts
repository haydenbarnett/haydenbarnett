import * as path from 'node:path';
import glob from 'fast-glob';

const importEntry = async (filename: string, directory = 'work') => {
  const { meta, default: component } = await import(
    `../pages/${directory}/${filename}`
  );
  return {
    // biome-ignore lint/performance/useTopLevelRegex: migration exception
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

  return entries.sort(
    (a, z) => Number.parseInt(z.start) - Number.parseInt(a.start)
  );
};
