import { withContentlayer } from 'next-contentlayer';
import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'imagepup.com',
      'haydenandanna.com',
      'benwotton.com',
      'annaphase.com',
      'freegameassets.com',
      'stormhyde.com',
      'barnettsdeniliquin.com',
    ],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          // https://haydenbleasel.com/blog/next-hsts-preload
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default withContentlayer(nextConfig);
