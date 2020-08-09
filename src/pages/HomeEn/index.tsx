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
              Hello, there!<br/>
              
              I'm Daniel Cruz, a 24 years old brazilian currently
              living in Rio de Janeiro - RJ. <br />
              
              I've been in love with IT since my childhood, when I used to code
              in several languages like VB6, Delphi 7, AutoIT and PHP as a hobby. <br />
              
              But then, in 2020 I decided to take a step foward. Nowadays I am
              studying it diligently, which shows that person willing to learn.
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
                  Document guard Hangar (RJ): responsible for managing
                  physical/digital data and monitoring the
                  production team.
                </p>
              </ParagraphsBox>
              <ParagraphsBox>
                <p>BILLING ASSISTANT</p>
                <small>Viva Rio - (November 2014 - June 2016)</small>
                <p>
                  Prison Health Unit (SEAP-RJ): in charge of collecting administrative data
                  related to hospital billing, dashboards, besides maintaining the
                  employees registration control and checking the
                  log of the biometric point. 
                  I volunteered performed the maintenance of the unit's computers.
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
                  The college was built in Londrina in 1994 as a "South American
                  Theological Seminary" (Acronym: STSA). Later, around 2000, 
                  it was recognized as a theological higher education course by MEC 
                  (Brazillian Education Ministry), becoming the South American Theological 
                  Faculty - FTSA. Its founders were: Dr. Antonio Carlos Barro
                  and Dr. Jorge Henrique Barro, both with theological training
                  at Fuller Theological Seminary, situated in Pasadena, California.
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
                  higher education institution founded in 1970 situated in the Rio
                  Comprido neighborhood, in the Central Zone of Rio de Janeiro,
                  as a law school.
                  Nowadays the college is part of the YDUQS universities group.
                  It has 39 campuses around the state, being Tom Jobim Campus the main one,
                  responsible for the university administration. 
                  In 2019, in the University Ranking of "Folha de S. Paulo" (RUF), it was 
                  classified as one of the 100 best Brazilian universities and as the 27th
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
