import {useEffect} from "react";
import Head from "next/head";
import {useRouter} from "next/dist/client/router";

import {getInitialLocale} from "../translations/getInitialLocale";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/[lang]", `/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <noscript>
        <meta http-equiv="refresh" content="0; url=/en" />
      </noscript>
    </Head>
  );
};
export default Index;
