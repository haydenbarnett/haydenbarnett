import type { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import type { WorkPost } from 'contentlayer/generated';
import { allWorkPosts } from 'contentlayer/generated';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Container } from '../../components/Container';
import { Prose } from '../../components/Prose';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { author } from '@/data';
import { Mdx } from '@/components/mdx';

const ArticleLayout: FC<{
  post: WorkPost;
}> = ({ post }) => {
  const { company, description, logo, preview, href, tags, start, end } = post;

  return (
    <>
      <Head>
        <title>{`${company} - ${author.name}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <BackButton href="/work" />
            <article>
              <header className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-base text-zinc-500">
                    {start} → {end ?? 'Present'}
                  </span>
                  <Button href={href} target="_blank">
                    Visit website
                  </Button>
                </div>
                <h1 className="mt-12 flex items-center gap-5 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {logo && (
                    <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full ring-1 ring-zinc-300 dark:bg-zinc-800 dark:text-white dark:ring-zinc-800">
                      <Image
                        src={logo}
                        alt=""
                        className="h-10 w-10"
                        height={40}
                        width={40}
                      />
                    </div>
                  )}
                  <span>{company}</span>
                </h1>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-200">
                  {description}
                </p>
              </header>
              {tags?.length && (
                <div className="mt-12 flex flex-wrap gap-1.5">
                  {tags.map((instance, index) => (
                    <Tag key={index}>{instance}</Tag>
                  ))}
                </div>
              )}
              <Prose className="mt-8">
                {preview && (
                  <Image src={preview} alt="" width={2560} height={1920} />
                )}
                <Mdx code={post.body.code} />
              </Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allWorkPosts.find(
    ({ slugAsParams }) => slugAsParams === params?.post
  );

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allWorkPosts.map(({ slugAsParams }) => ({
    params: { post: slugAsParams },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticleLayout;
