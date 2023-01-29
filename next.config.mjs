import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';
import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          // HSTS Preload: https://hstspreload.org/
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

const withMDX = nextMDX({
  // eslint-disable-next-line require-unicode-regexp
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
