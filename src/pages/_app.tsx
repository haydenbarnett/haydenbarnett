import { Analytics } from '@vercel/analytics/react';
import { Header, Footer } from '@/components';
import type { FC } from 'react';
import type { AppProps } from 'next/app';

import '@/styles/tailwind.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <div className="relative md:flex">
      <div className="w-full pt-8 md:pt-24">
        <div className="px-4 md:sticky md:top-24 md:pl-24 md:pr-0">
          <Header />
        </div>
      </div>
      <main className="w-full pt-24">
        <Component {...pageProps} />
      </main>
    </div>
    <div className="px-4 pb-8 pt-24 md:fixed md:bottom-24 md:left-24 md:p-0">
      <Footer />
    </div>
    <Analytics />
  </>
);

export default App;
