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
          // https://www.beskar.co/blog/next-hsts-preload
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Temporary
  webpack: (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    config.module.rules.push({
      test: /\.svg$/iu,
      issuer: /\.tsx?$/u,
      use: ['@svgr/webpack'],
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.infrastructureLogging = {
      level: 'error',
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};

export default withContentlayer(nextConfig);
