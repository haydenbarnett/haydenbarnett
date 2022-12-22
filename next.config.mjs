import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
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
};

export default withContentlayer(nextConfig);
