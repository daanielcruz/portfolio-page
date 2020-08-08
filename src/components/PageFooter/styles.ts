import styled from 'styled-components';

export const Footer = styled.footer`
  height: 10vh;
  font-family: 'Rubik';
  border-top: 1px solid #c2c2c2;
  font-size: 1.2rem;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: black;
  > a {
    color: black;
    transition: 0.4s;
    &:hover {
      opacity: 0.5;
    }
  }
`;
