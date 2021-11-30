import { ILanguage } from "@common/constant/language";
import ChangeLanguage from "@components/ChangeLanguage";
import Input from "@components/Input";
import Header from "@components/Layout/Header";
import AWSTranslate from "@services/AWS";
import { ITranslateTextPayload } from "@services/AWS/interface";
import { useRouter } from "next/dist/client/router";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";

const HomeContainer = styled.div`
  ${tw`mb-20`}
`;

const HomeBox = styled.div`
  ${tw`container mx-auto`}
`;

const TranslateBox = styled.div`
  ${tw`w-full grid lg:grid-cols-2 gap-14`}
`;

interface IHome {}

const Home: FC<IHome> = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();
  const [selectInput, setSelectInput] = useState<ILanguage>();
  const [selectOutput, setSelectOutput] = useState<ILanguage>();

  const timer = useRef<any>(null);

  useEffect(() => {
    let url = new URL(location.origin + router.asPath);
    let text = url.searchParams.get("text");

    setInput(text || "Hello world! Who I am.");
  }, []);
  
  useEffect(() => {
    let url = new URL(location.origin + router.asPath);
    let query: any = handleInitQuery(url);
    console.log(query);

    if (input?.trim() !== "") {
      query.text = input;
    }

    if (selectInput && selectOutput) {
      handleCallApi();

      router.replace({
        query: query,
      });
    }
  }, [input]);
};
