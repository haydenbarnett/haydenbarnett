'use client';

import dynamic from 'next/dynamic';
import { Seo } from '@/components';
import type { FC } from 'react';

const Ascii = dynamic(
  async () =>
    import(
      /* webpackChunkName: "Ascii" */
      '@/components/Ascii'
      // eslint-disable-next-line promise/prefer-await-to-then
    ).then((mod) => mod.Ascii),
  {
    ssr: false,
  }
);

const Home: FC = () => (
  <>
    <Seo />
    <div className="hidden lg:block">
      <Ascii />
    </div>
  </>
);

export default Home;
