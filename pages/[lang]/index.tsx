import Head from "next/head";

import useTranslation from "../../hooks/useTranslation";

import withLocale from "../../hocs/withLocale";

import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";

import {Main} from "../../styles/home";

const Home = () => {
  const {locale, t} = useTranslation();
  return (
    <>
      <Head>
        <title>Daniel Cruz - {t("jobRole")}</title>
        <meta name="description" content={t("metaDescription")}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
        />
        <script
          async
          src={"https://www.googletagmanager.com/gtag/js?id=UA-167264249-1"}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-167264249-1');
                  `,
          }}
        />
      </Head>
      <Main>
        <AboutMe />
        <Projects />
      </Main>
    </>
  );
};
export default withLocale(Home);
