import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const MyDocument: FC = () => (
  <Html className="h-full antialiased" lang="en">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
    <body className="flex h-full flex-col bg-zinc-200 dark:bg-zinc-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
