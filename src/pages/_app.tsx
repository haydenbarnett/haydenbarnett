import { Analytics } from '@vercel/analytics/react';
import { Header, Footer } from '@/components';
import type { FC } from 'react';
import type { AppProps } from 'next/app';

import '@/styles/tailwind.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <div className="relative md:flex">
      <div className="w-full pt-8 md:pt-12 lg:pt-24">
        <div className="px-6 md:sticky md:top-12 md:pl-12 md:pr-0 lg:top-24 lg:pl-24">
          <Header />
        </div>
      </div>
      <main className="w-full pt-12 lg:pt-24">
        <Component {...pageProps} />
      </main>
    </div>
    <div className="px-6 pb-8 pt-12 md:fixed md:bottom-12 md:left-12 md:p-0 lg:bottom-24 lg:left-24">
      <Footer />
    </div>
    <Analytics />
  </>
);

export default App;
