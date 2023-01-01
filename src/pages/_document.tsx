import { Html, Head, Main, NextScript } from 'next/document';
import type { FC } from 'react';

const MyDocument: FC = () => (
  <Html className="h-full antialiased" lang="en">
    <Head />
    <body className="flex h-full flex-col bg-zinc-200 dark:bg-zinc-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
