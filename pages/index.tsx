import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import cx from "classnames";

import { Header, Introduction, Social, Squiggle } from "../components";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const [headerLoaded, setHeadedLoaded] = useState(false);
  const [footerLoaded, setFooterLoaded] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <div
          className={cx(
            styles.content,
            headerLoaded && footerLoaded && styles.visible
          )}
        >
          <Header onLoadingComplete={() => setHeadedLoaded(true)} />
          <Introduction />
          <Social onLoadingComplete={() => setFooterLoaded(true)} />
        </div>
        <Squiggle />
      </div>
    </>
  );
};

export default Home;
