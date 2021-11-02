import type { NextPage } from "next";
import Head from "next/head";
import { Header, Social } from "../components";
import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Social />
      </div>
    </div>
  );
};

export default Home;
