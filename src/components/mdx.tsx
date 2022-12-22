import type * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  Image,
};

type MdxProps = {
  code: string;
};

export const Mdx: React.FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};
