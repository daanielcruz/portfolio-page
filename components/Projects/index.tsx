import Project from "./components/Project";
import Footer from "./components/Footer";

import {Content} from "./styles";

const Projects = () => (
  <Content>
    <Project
      role="Mobile"
      number="001"
      color="gray"
      img="/img/mockup-bomdebiblia.png"
      type="mobile"
      title="Bom de Bíblia"
      description="A Bible quiz built with TypeScript and React Native."
      source="https://github.com/daanielcruz/bomdebiblia-openquiz"
      deploy="https://play.google.com/store/apps/details?id=com.danielfcruz.bomdebiblia"
    />
    <Project
      role="Front-End"
      number="002"
      color="#f4a460"
      img="/img/mockup-front-employees.png"
      type="desktop"
      title="Challenge - Employees Management"
      description="A simple management system built with TypeScript and ReactJS."
      source="https://github.com/daanielcruz/3lm-front-end"
      deploy="https://front-end3lm.herokuapp.com/"
    />
    <Footer />
  </Content>
);
export default Projects;
