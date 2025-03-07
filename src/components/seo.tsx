import { config } from '@/data/config';
import { NextSeo } from 'next-seo';
import type { NextSeoProps } from 'next-seo';
import type { MetaTag, OpenGraphMedia } from 'next-seo/lib/types';
import { useRouter } from 'next/router';
import type { FC } from 'react';

type SeoProps = NextSeoProps & {
  readonly path?: string;
  readonly image?: string;
};

const { personal, meta } = config;
const { name } = personal;
const { title: workTitle, description: defaultDescription, color } = meta;

export const Seo: FC<SeoProps> = (props) => {
  const router = useRouter();
  const { pathname } = router;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const { title, description, image } = props;
  const url = pathname ? new URL(pathname, siteUrl).href : siteUrl;

  const imageUrl = new URL('/api/og', siteUrl);
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
        url: new URL(image, siteUrl).href,
      },
    ];
  }

  return (
    <NextSeo
      defaultTitle={`${name} - ${workTitle}`}
      description={description ?? defaultDescription}
      titleTemplate={`%s — ${name}`}
      canonical={url}
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
