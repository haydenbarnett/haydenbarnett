import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import { Header, Footer } from '@/components';

import '@/styles/tailwind.css';
import 'focus-visible';

const App: FC<AppProps> = ({ Component, pageProps, router }) => (
  <>
    <div className="relative">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      {router.pathname !== '/404' && <Footer />}
    </div>
    <Analytics />
  </>
);

export default App;
