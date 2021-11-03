import type { NextPage } from "next";
import Head from "next/head";
import { Header, Introduction, Social, Squiggle } from "../components";
import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <Introduction />
        <Social />
        <Squiggle />
      </div>
    </>
  );
};

export default Home;
