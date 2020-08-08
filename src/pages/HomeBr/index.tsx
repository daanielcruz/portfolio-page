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
} from '../HomeEn/styles';

import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

const HomeEn: React.FC = () => {
  return (
    <>
      <Container>
        <PageHeader language={'pt'} />
        <Content>
          <Section id="about-me">
            <SectionTextBox>
              <p>Sobre mim</p>
              Sou brasileiro e tenho 24 anos de idade, atualmente moro no Rio de
              Janeiro/RJ, apaixonado por TI desde a minha infância, neste tempo
              programei coisas simples nas seguintes linguagens: VB6, Delphi 7,
              AutoIT e PHP. Em 2020 decidi estudar com afinco, sou uma pessoa
              disposta a aprender.
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
              <p>Habilidades</p>Gosto bastante de trabalhar com React Native,
              ReactJS, Redux e TypeScript. Veja abaixo algumas tecnologias que
              estou estudando atualmente:
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
              <p>Experiência Profissional</p>
              <ParagraphsBox>
                <p>ASSISTENTE ADMINISTRATIVO</p>
                <small>Sos Docs - (Janeiro 2019 - Junho 2020)</small>
                <p>
                  Galpão de guarda de documentos (RJ): digitalização e
                  saneamento de documentos físicos/digitais, dashboards,
                  monitorar equipe de produção.
                </p>
              </ParagraphsBox>
              <ParagraphsBox>
                <p>ASSISTENTE DE FATURAMENTO</p>
                <small>Viva Rio - (Novembro 2014 - Junho 2016)</small>
                <p>
                  Unidade prisional de saúde (SEAP-RJ): coletar dados
                  administrativos relacionados ao faturamento hospitalar,
                  dashboards, manter o controle cadastral de funcionários e
                  fazer a conferencia/cadastramento de ponto biométrico e como
                  hobbie realizava a manutenção dos computadores da unidade!
                </p>
              </ParagraphsBox>
            </SectionTextBox>
          </Section>

          <Section id="education">
            <SectionTextBox>
              <p>Formação Acadêmica</p>
              <ParagraphsBox>
                <p>FACULDADE TEOLÓGICA SUL AMERICANA</p>
                <small>Bacharelado em Teologia - (2018 - 2022)</small>
                <p>
                  A faculdade foi formada em Londrina em 1994 como Seminário
                  Teológico Sul Americano (Sigla: STSA) e posteriormente com o
                  reconhecimento, entre os anos de 1999 e 2000, da teologia como
                  curso de nível superior pelo MEC se tornou a Faculdade
                  Teológica Sul Americana - FTSA. Teve como fundadores: Dr.
                  Antonio Carlos Barro e Dr. Jorge Henrique Barro, ambos com
                  formação teológica pelo Fuller Theological Seminary (EUA).
                </p>
              </ParagraphsBox>
              <ParagraphsBox>
                <p>UNIVERSIDADE ESTÁCIO DE SÁ</p>
                <small>
                  Tecnólogo em Análise e Desenvolvimento de Sistemas - (2020 -
                  2023)
                </small>
                <p>
                  A Universidade Estácio de Sá (UNESA) é uma instituição de
                  ensino superior privada brasileira fundada em 1970 no bairro
                  de Rio Comprido, na Zona Central do Rio de Janeiro, como uma
                  faculdade de Direito, e que hoje faz parte do grupo de
                  universidades YDUQS. Possui 39 campus espalhados por todo o
                  estado do Rio de Janeiro, sendo o Campus Tom Jobim o principal
                  e responsável pela administração da universidade. Em 2019, o
                  Ranking Universitário da Folha de S.Paulo (RUF) a classificou
                  como uma das 100 melhores universidades brasileiras, e como a
                  27ª melhor instituição superior privada do país.
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
