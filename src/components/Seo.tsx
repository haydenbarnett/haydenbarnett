import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';
import type { MetaTag, OpenGraphMedia } from 'next-seo/lib/types';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { config } from '@/data/config';

type SeoProps = NextSeoProps & {
  path?: string;
  image?: string;
};

const {
  name,
  shortDescription,
  description: defaultDescription,
  color,
} = config;

export const Seo: FC<SeoProps> = (props) => {
  const router = useRouter();
  const { pathname } = router;

  const { title, description, image } = props;
  const url = pathname
    ? new URL(pathname, process.env.NEXT_PUBLIC_SITE_URL).href
    : process.env.NEXT_PUBLIC_SITE_URL;

  const imageUrl = new URL('/api/og', process.env.NEXT_PUBLIC_SITE_URL);
  imageUrl.searchParams.set('title', title ?? '');
  imageUrl.searchParams.set('description', description ?? defaultDescription);
  imageUrl.searchParams.set('path', pathname);

  let images: OpenGraphMedia[] = [
    {
      url: imageUrl.href,
      width: 1200,
      height: 630,
      alt: name,
    },
  ];

  if (image) {
    images = [
      {
        url: new URL(image, process.env.NEXT_PUBLIC_SITE_URL).href,
      },
    ];
  }

  return (
    <NextSeo
      defaultTitle={`${name} - ${shortDescription}`}
      titleTemplate={`%s — ${name}`}
      canonical={pathname}
      openGraph={{
        title,
        description,
        url,
        site_name: name,
        images,
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color,
        },
      ]}
      additionalMetaTags={[
        {
          charSet: 'utf-8',
        } as unknown as MetaTag,
        {
          name: 'viewport',
          content:
            'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
        },
        {
          name: 'application-name',
          content: name,
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: name,
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'msapplication-TileColor',
          content: color,
        },
        {
          name: 'msapplication-tap-highlight',
          content: 'no',
        },
        {
          name: 'theme-color',
          content: color,
        },
      ]}
      {...props}
    />
  );
};
