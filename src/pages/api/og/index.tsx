/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { config as data } from '@/data';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const parseError = (error: unknown): string => {
  const message = error instanceof Error ? error.message : String(error);

  return message;
};

const createString = (str: string | null, fallback: string): string => {
  if (!str) {
    return fallback;
  }

  if (str.length > 180) {
    return `${str.slice(0, 180)}...`;
  }

  return str;
};

const handler = async (req: NextRequest): Promise<ImageResponse> => {
  const { searchParams } = new URL(req.url);
  const InterRegular = await fetch(
    new URL('public/Inter-Regular.otf', import.meta.url)
  ).then(async (res) => res.arrayBuffer());
  const InterBold = await fetch(
    new URL('public/Inter-Bold.otf', import.meta.url)
  ).then(async (res) => res.arrayBuffer());

  const title = createString(searchParams.get('title'), data.name);
  const description = createString(searchParams.get('description'), '');
  const path = createString(searchParams.get('path'), '/');
  const { hostname } = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  const url = `${hostname}${path}`;

  try {
    return new ImageResponse(
      (
        <div tw="flex bg-zinc-900 flex-1 w-full h-full justify-center flex-col py-12 px-48">
          <div tw="flex flex-col relative z-10">
            <p tw="text-4xl leading-[1.1] font-medium mt-8 text-white">
              {title}
            </p>
            <p tw="text-2xl mt-0 mb-8 text-zinc-400">{description}</p>
            <p tw="text-md m-0 text-zinc-400">{url}</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: InterRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: InterBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    );
  } catch (error) {
    const message = parseError(error);

    return new Response(`Failed to generate the image: ${message}`, {
      status: 500,
    });
  }
};

export default handler;
