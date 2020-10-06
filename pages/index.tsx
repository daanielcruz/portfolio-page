import Head from "next/head";

import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

import {Container, Main} from "../styles/home";

const Home = () => (
  <Container>
    <Head>
      <title>Daniel Cruz - Developer</title>
      <meta
        name="description"
        content="Daniel Cruz is a Front-End Developer, that loves JavaScript and related libraries and frameworks like React and React Native."></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"></meta>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      />
    </Head>
    <Main>
      <AboutMe />
      <Projects />
    </Main>
  </Container>
);
export default Home;
