import Head from "next/head";
// import type { NextPage } from "next";
// import { Fragment } from "react";
// import Home from "@containers/Home";
// import MetaTitle from "@design/MetaTitle";

interface ITitle {
  title: string;
}

const MetaTitle = ({ title = "Translate" }: ITitle) => {
  return (
    <Head>
      <title>{`${title}`} </title>
    </Head>
  );
};

export default MetaTitle;