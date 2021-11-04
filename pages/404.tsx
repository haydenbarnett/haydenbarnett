import type { NextPage } from "next";
import { Error } from "../components";

const Error404: NextPage = () => {
  return (
    <div className="wrapper">
      <Error />
    </div>
  );
};

export default Error404;
