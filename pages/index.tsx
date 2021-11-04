import type { NextPage } from "next";
import Head from "next/head";
import { Header, Introduction, Social, Squiggle } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <Introduction />
        <Social />
        <Squiggle />
      </div>
    </>
  );
};

export default Home;
