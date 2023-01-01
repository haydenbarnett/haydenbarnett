import type { FC } from 'react';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import clsx from 'clsx';
import { useCommandBar } from '@haydenbleasel/command-bar';
import useOnline from '@haydenbleasel/use-online';
import { toast, Toaster } from 'react-hot-toast';
import Router from 'next/router';
import { Header, Footer } from '@/components';
import '@/styles/tailwind.css';
import 'focus-visible';
import { inter } from '@/utils/font';
import ShortcutBar from '@/components/ShortcutBar';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const commandBar = useCommandBar();
  const isOnline = useOnline();

  Router.events.on('routeChangeStart', () => {
    commandBar.toggleOpen(false);
  });

  useEffect(() => {
    if (!isOnline) {
      toast.error(
        'You are offline, some features may not work as expected until you reconnect.'
      );
    }
  }, [isOnline]);

  return (
    <div className="relative">
      <Header />
      <main className={clsx('font-sans', inter.className)}>
        <Component {...pageProps} />
      </main>
      <ShortcutBar />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
