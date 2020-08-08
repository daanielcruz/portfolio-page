import React from 'react';
import {
  FaWhatsappSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import {
  Container,
  Content,
  Section,
  SectionTextBox,
  IconsContainer,
  IconContainer,
  ParagraphsBox,
} from './styles';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

const HomeEn: React.FC = () => {
  return (
    <>
      <Container>
        <PageHeader language={'en'} />
        <Content>
          <Section id="about-me">
            <SectionTextBox>
              <p>About me</p>
              I'm brazilian and 24 years old, i currently live in Rio de Janeiro
              - RJ, passionate about IT since my childhood, in this time I
              programmed simple things in the following languages: VB6, Delphi
              7, AutoIT e PHP. In 2020 I decided to study diligently, I am a
              person willing to learn.
            </SectionTextBox>
            <IconsContainer>
              <IconContainer
                href="https://github.com/daanielcruz"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <FaGithubSquare size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer
                href="https://www.linkedin.com/in/danielfercruz"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <FaLinkedin size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer
                href="https://api.whatsapp.com/send?phone=5521979288342&text=Hello%20Daniel%20Cruz!"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <FaWhatsappSquare size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer
                href="mailto:public@danielcruz.dev.br"
                title="E-mail"
              >
                <FaEnvelopeSquare size={40} color={'#262626'} />
              </IconContainer>
            </IconsContainer>
          </Section>

          <Section id="skills">
            <SectionTextBox>
              <p>Skills</p>I really enjoy working with React Native, ReactJS,
              Redux and TypeScript. Below you can see some technologies that i'm
              currently studying:
            </SectionTextBox>
            <IconsContainer>
              <IconContainer
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="React"
              >
                <FaReact size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="NodeJS"
              >
                <FaNodeJs size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer
                href="http://www.ecmascript.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="JavaScript"
              >
                <FaJsSquare size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer title="HTML5">
                <FaHtml5 size={40} color={'#262626'} />
              </IconContainer>
              <IconContainer title="CSS3">
                <FaCss3Alt size={40} color={'#262626'} />
              </IconContainer>
            </IconsContainer>
          </Section>

          <Section id="experience">
            <SectionTextBox>
              <p>Professional Experience</p>
              <ParagraphsBox>
                <p>ADMINISTRATIVE ASSISTANT</p>
                <small>Sos Docs - (January 2019 - June 2020)</small>
                <p>
                  Document guard Hangar (RJ): digitization and sanitation of
                  physical/digital documents, dashboards, monitoring of the
                  production team.
                </p>
              </ParagraphsBox>
              <ParagraphsBox>
                <p>BILLING ASSISTANT</p>
                <small>Viva Rio - (November 2014 - June 2016)</small>
                <p>
                  Prison Health Unit (SEAP-RJ): collect administrative data
                  related to hospital billing, dashboards, maintain the
                  registration control of employees and make the
                  conference/registration of biometric point and as a hobby
                  performed the maintenance of the unit's computers.
                </p>
              </ParagraphsBox>
            </SectionTextBox>
          </Section>

          <Section id="education">
            <SectionTextBox>
              <p>Academic Formation</p>
              <ParagraphsBox>
                <p>FACULDADE TEOLÓGICA SUL AMERICANA</p>
                <small>Bachelor of Theology - (2018 - 2022)</small>
                <p>
                  The college was formed in Londrina in 1994 as "South American
                  Theological Seminary" (Acronym: STSA) and later with the
                  recognition, between 1999 and 2000, of theology as a higher
                  education course by MEC became the South American Theological
                  Faculty - FTSA. Its founders were: Dr. Antonio Carlos Barro
                  and Dr. Jorge Henrique Barro, both with theological training
                  at Fuller Theological Seminary (USA).
                </p>
              </ParagraphsBox>
              <ParagraphsBox>
                <p>UNIVERSIDADE ESTÁCIO DE SÁ</p>
                <small>
                  Associate Degree in System Analysis and Development - (2020 -
                  2023)
                </small>
                <p>
                  The Estácio de Sá University (UNESA) is a Brazilian private
                  higher education institution founded in 1970 in the Rio
                  Comprido neighborhood, in the Central Zone of Rio de Janeiro,
                  as a law school, and today it is part of the group of
                  universities YDUQS. It has 39 campuses spread across the state
                  of Rio de Janeiro, with Tom Jobim Campus being the main and
                  responsible for university administration. In 2019, the
                  University Ranking of "Folha de S. Paulo" (RUF) classified it
                  as one of the 100 best Brazilian universities, and as the 27th
                  best private higher institution in the country.
                </p>
              </ParagraphsBox>
            </SectionTextBox>
          </Section>
        </Content>
      </Container>
      <PageFooter />
    </>
  );
};

export default HomeEn;
