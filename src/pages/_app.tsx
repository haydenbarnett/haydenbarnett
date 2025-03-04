import { Footer, Header } from '@/components';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import type { FC } from 'react';

import '@/styles/tailwind.css';

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <div className="flex h-full flex-col">
      <div className="relative flex grow flex-col md:flex-row">
        <div className="w-full pt-8 md:pt-12 lg:pt-24">
          <div className="px-6 md:sticky md:top-12 md:pr-0 md:pl-12 lg:top-24 lg:pl-24">
            <Header />
          </div>
        </div>
        <main className="w-full pt-12 md:pt-[88px] lg:pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <div className="px-6 py-12 md:fixed md:bottom-12 md:left-12 md:p-0 lg:bottom-24 lg:left-24">
        <Footer />
      </div>
    </div>
    <Analytics />
  </>
);

export default App;
