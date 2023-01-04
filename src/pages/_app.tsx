import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import type { AppProps } from 'next/app';

import { Header, Footer } from '@/components';

import '@/styles/tailwind.css';
import 'focus-visible';

const usePrevious = (value: string) => {
  const ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const previousPathname = usePrevious(router.pathname);

  return (
    <div className="relative">
      <Header />
      <main>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
