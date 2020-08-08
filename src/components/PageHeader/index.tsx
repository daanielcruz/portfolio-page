import React, { useState } from 'react';
import {
  Header,
  LinksBox,
  ProfileImage,
  TextBox,
  NameText,
  WorkText,
  TranslateBox,
  LinkTo,
} from './styles';
import Burger from '../Burger';
import Menu from '../Menu';

interface iPageHeader {
  language: string;
}

const PageHeader: React.FC<iPageHeader> = ({ language }) => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <LinksBox>
        <LinkTo
          to={language === 'pt' ? '/pt-br' : '/en'}
          activeStyle={{ fontWeight: 'bold' }}
        >
          {language === 'pt' ? 'Sobre' : 'About'}
        </LinkTo>
        <a
          href="https://api.whatsapp.com/send?phone=5521979288342&text=Hello%20Daniel%20Cruz!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === 'pt' ? 'Contato' : 'Contact'}
        </a>
      </LinksBox>
      <ProfileImage src="https://avatars0.githubusercontent.com/u/65899808?s=460&u=b13fcc4f8d38b58f0c6f7e69840a86d8a8437618&v=4" />
      <TextBox>
        <NameText>Daniel Cruz</NameText>
        <WorkText>Fullstack Developer</WorkText>
      </TextBox>
      <TranslateBox>
        <LinkTo
          to="/pt-br"
          activeStyle={{ borderBottomWidth: 2, fontWeight: 'bold' }}
        >
          Português
        </LinkTo>
        <LinkTo to="/en" activeStyle={{ fontWeight: 'bold' }}>
          English
        </LinkTo>
      </TranslateBox>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} language={language} />
    </Header>
  );
};

export default PageHeader;
