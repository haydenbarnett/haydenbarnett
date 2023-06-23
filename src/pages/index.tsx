'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
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
      <Suspense fallback={null}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { delay: 0 },
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Ascii />
        </motion.div>
      </Suspense>
    </div>
  </>
);

export default Home;
