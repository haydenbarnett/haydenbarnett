import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { FC } from 'react';

const components = {
  Image,
};

type MdxProps = {
  code: string;
};

export const Mdx: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
