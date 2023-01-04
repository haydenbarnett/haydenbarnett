import type { FC } from 'react';
import type { AppProps } from 'next/app';

import { Header, Footer } from '@/components';

import '@/styles/tailwind.css';
import 'focus-visible';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <div className="relative">
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
);

export default App;
