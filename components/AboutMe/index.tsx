import {useCallback} from "react";
import {useRouter} from "next/router";

import useTranslation from "../../hooks/useTranslation";
import {locales} from "../../translations/config";

import {
  Content,
  TranslateContainer,
  TitleName,
  Qualities,
  Quality,
  Description,
  IconsContainer,
  Icon,
  ButtonContainer,
  ContactMe,
} from "./styles";

const AboutMe = () => {
  const {locale, t} = useTranslation();
  const router = useRouter();

  const handleLocaleChange = useCallback(
    (locale: string) => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${locale}`));
    },
    [router],
  );

  return (
    <Content>
      <TranslateContainer>
        <span onClick={() => handleLocaleChange("pt")}>PT</span>
        <span> | </span>
        <span onClick={() => handleLocaleChange("en")}>EN</span>
      </TranslateContainer>
      <TitleName>Daniel F. Cruz</TitleName>
      <Qualities>
        <Quality>{t("quality1")}</Quality>
        <Quality>{t("quality2")}</Quality>
        <Quality>{t("quality3")}</Quality>
        <Quality>{t("quality4")}</Quality>
      </Qualities>
      <Description>{t("description")}</Description>
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
      <ButtonContainer>
        <ContactMe
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5521979288342&text=Hello%20Daniel%20Cruz!">
          {t("contactButton")}
        </ContactMe>
      </ButtonContainer>
    </Content>
  );
};
export default AboutMe;
