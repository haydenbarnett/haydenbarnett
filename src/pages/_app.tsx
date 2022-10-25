import { useEffect, useRef } from 'react';
import { AppProps } from 'next/app';

import { Header, Footer } from '@/components';

import '@/styles/tailwind.css';
import 'focus-visible';

const usePrevious = (value: string) => {
  let ref = useRef<string>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
