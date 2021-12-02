import type { NextPage } from "next";
import { Fragment } from "react";
import Home from "@containers/Home";
import MetaTitle from "@design/MetaTitle";

// import { ILanguage } from "@common/constant/language";
// import ChangeLanguage from "@components/ChangeLanguage";
// import Input from "@components/Input";
// import Header from "@components/Layout/Header";
// import AWSTranslate from "@services/AWS";
// import { ITranslateTextPayload } from "@services/AWS/interface";
// import { useRouter } from "next/dist/client/router";
// import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
// import tw, { styled } from "twin.macro";

const Homepage: NextPage = () => {
  return (
    <Fragment>
      <MetaTitle title="UTE Translate" />
      <Home />
    </Fragment>
  );
};

export default Homepage;