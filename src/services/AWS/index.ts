import AWS from "aws-sdk";
import { ITranslateTextPayload } from "./interface";

const awsCof = {
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
};

const AWSTranslate = (function () {
  const translate = new AWS.Translate(awsCof);
  const polly = new AWS.Polly();

  const doTranslate = (payload: ITranslateTextPayload) => {
    if (!payload.Text) {
      throw "Vui lòng nhập đầu vào";
    }

    return translate.translateText(payload).promise();
  };

  return {
    doTranslate: doTranslate,
  };
})();

export default AWSTranslate;
