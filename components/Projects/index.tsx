import useTranslation from "../../hooks/useTranslation";

import Project from "./components/Project";
import Footer from "./components/Footer";

import {Content} from "./styles";

const Projects = () => {
  const {locale, t} = useTranslation();
  return (
    <Content>
      <Project
        role="Mobile"
        number="001"
        color="gray"
        img="/img/mockup-bomdebiblia.webp"
        type="mobile"
        title={t("title001")}
        description={t("description001")}
        source="https://github.com/daanielcruz/bomdebiblia-openquiz"
        deploy="https://play.google.com/store/apps/details?id=com.danielfcruz.bomdebiblia"
      />
      <Project
        role="Front-End"
        number="002"
        color="#f4a460"
        img="/img/mockup-front-employees.webp"
        type="desktop"
        title={t("title002")}
        description={t("description002")}
        source="https://github.com/daanielcruz/3lm-front-end"
        deploy="https://front-end3lm.herokuapp.com/"
      />
      <Project
        role="Back-End"
        number="003"
        color="#321800"
        img="/img/mockup-back-employees.webp"
        type="desktop"
        title={t("title003")}
        description={t("description003")}
        source="https://github.com/daanielcruz/3lm-back-end"
        deploy="https://back-end3lm.herokuapp.com/"
      />
      <Project
        role="Front-End"
        number="004"
        color="#6666ff"
        img="/img/mockup-notflix.webp"
        type="desktop"
        title={t("title004")}
        description={t("description004")}
        source="https://github.com/daanielcruz/notflix"
        deploy="https://notflix-one.vercel.app/"
      />
      <Project
        role="Front-End"
        number="005"
        color="#ff0000"
        img="/img/mockup-winnin.webp"
        type="desktop"
        title={t("title005")}
        description={t("description005")}
        source="https://github.com/daanielcruz/winnin-challenge"
        deploy="https://winnin-challenge.vercel.app/"
      />
      <Project
        role="Front-End"
        number="006"
        color="lightblue"
        img="/img/mockup-loocal.webp"
        type="desktop"
        title={t("title006")}
        description={t("description006")}
        source="https://github.com/daanielcruz/test-frontend"
        deploy="https://test-frontend-code.netlify.app/"
      />
      <Footer />
    </Content>
  );
};
export default Projects;
