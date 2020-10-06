import {
  Content,
  TitleName,
  Qualities,
  Quality,
  Description,
  IconsContainer,
  Icon,
  Buttons,
  ContactMe,
} from "./styles";

const AboutMe = () => {
  return (
    <Content>
      <TitleName>Daniel F. Cruz</TitleName>
      <Qualities>
        <Quality>DEVELOPER.</Quality>
        <Quality>RELIABLE.</Quality>
        <Quality>FAST.</Quality>
        <Quality>SMART.</Quality>
      </Qualities>
      <Description>
        <strong style={{color: "red"}}>
          This page is under construction! Last Update: 06/10/2020
          <br />
          <br />
        </strong>
        Front-End Developer. Currently looking for new opportunities. Follow my
        work below.
      </Description>
      <IconsContainer>
        <Icon
          href="https://github.com/daanielcruz"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="fab fa-github-square fa-2x"
        />
        <Icon
          href="https://www.linkedin.com/in/danielfercruz"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="fab fa-linkedin fa-2x"
        />
        <Icon
          href="https://api.whatsapp.com/send?phone=5521979288342&text=Hello%20Daniel%20Cruz!"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="fab fa-whatsapp-square fa-2x"
        />
        <Icon
          href="mailto:main@danielcruz.dev.br"
          title="E-mail"
          className="fas fa-envelope-square fa-2x"
        />
      </IconsContainer>
      <Buttons>
        <ContactMe
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5521979288342&text=Hello%20Daniel%20Cruz!">
          Contact Me
        </ContactMe>
      </Buttons>
    </Content>
  );
};
export default AboutMe;
