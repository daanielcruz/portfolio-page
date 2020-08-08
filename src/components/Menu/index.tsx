import React from 'react';
import { StyledMenu } from './styles';
import { NavLink } from 'react-router-dom';

interface iMenu {
  open: boolean;
  language: string;
}

const Menu: React.FC<iMenu> = ({ open, language }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to={language === 'pt' ? '/pt-br' : '/en'}>
        <span
          role="img"
          aria-label={language === 'en' ? 'about me' : 'sobre mim'}
        >
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        {language === 'en' ? 'About me' : 'Sobre mim'}
      </NavLink>

      <NavLink to={language === 'pt' ? '/contact/pt-br' : '/contact/en'}>
        <span role="img" aria-label={language === 'en' ? 'contact' : 'contato'}>
          &#x1f4e9;
        </span>
        {language === 'en' ? 'Contact' : 'Contato'}
      </NavLink>

      <NavLink to={language === 'en' ? '/pt-br' : '/en'}>
        {language === 'en' ? 'Pt-br' : 'English'}
      </NavLink>
    </StyledMenu>
  );
};
export default Menu;
