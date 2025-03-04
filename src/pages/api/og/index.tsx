import { config as data } from '@/data';
import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
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

const handler = (req: NextRequest): ImageResponse | Response => {
  const { searchParams } = new URL(req.url);
  const title = createString(searchParams.get('title'), data.personal.name);
  const description = createString(searchParams.get('description'), '');
  const path = createString(searchParams.get('path'), '/');
  const { hostname } = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  const url = `${hostname}${path}`;

  try {
    return new ImageResponse(
      <div tw="flex bg-gray-900 flex-1 w-full h-full justify-center flex-col py-12 px-48">
        <div tw="flex flex-col relative z-10">
          <p tw="text-4xl leading-[1.1] mt-8 text-white">{title}</p>
          <p tw="text-2xl mt-0 mb-8 text-gray-300">{description}</p>
          <p tw="text-md m-0 text-gray-400">{url}</p>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    const message = parseError(error);

    return new Response(`Failed to generate image: ${message}`, {
      status: 500,
    });
  }
};

export default handler;
