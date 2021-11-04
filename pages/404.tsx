import type { NextPage } from "next";

import { Error } from "../components";
import styles from "../styles/index.module.css";

const Error404: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Error />
    </div>
  );
};

export default Error404;
