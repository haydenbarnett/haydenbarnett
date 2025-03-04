import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full antialiased" lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex h-full flex-col bg-gray-900 text-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
