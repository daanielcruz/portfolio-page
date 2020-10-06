import type {AppProps} from "next/app";

import {getInitialLocale} from "../translations/getInitialLocale";

import {GlobalStyle} from "../styles/globals";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
