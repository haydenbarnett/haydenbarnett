import type { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const NotFound: FC = () => {
  const thumbsUp = new Array(18).fill(null).map((_, index) => (
    <div
      key={index}
      className={clsx(
        'relative flex h-full w-full animate-slideup items-center justify-center',
        index % 2 && 'top-1/2'
      )}
    >
      <Image
        src="/thumbsup.png"
        alt=""
        width={40}
        height={40}
        className="select-none"
        unoptimized
      />
    </div>
  ));

  return (
    <>
      <div className="fixed top-0 z-10 flex h-screen w-full items-center justify-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Page not found
        </h1>
      </div>
      <div className="fixed -top-1/4 z-0 grid h-[150vh] w-full grid-cols-6 items-center justify-center overflow-hidden opacity-50">
        {thumbsUp}
      </div>
    </>
  );
};

export default NotFound;
