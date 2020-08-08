import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex: 1;
  max-height: 15vh;
  @media (min-width: 1100px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled.strong`
  font-size: 1.6rem;
  font-family: 'Rubik';
  font-weight: bold;
  color: #262626;
`;

export const WorkText = styled.p`
  font-size: 1rem;
  font-family: 'Rubik';
  font-weight: normal;
  color: #595959;
`;

export const LinksBox = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    margin-right: 10vw;
    align-items: center;
    justify-content: center;

    > a {
      text-decoration: none;
      color: #595959;
      font-family: 'Rubik';
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }

    > a:last-child {
      margin-left: 1.5rem;
    }
  }
`;

export const LinkTo = styled(NavLink)``;

export const TranslateBox = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    margin-left: 10vw;
    align-items: center;
    justify-content: center;

    > a {
      text-decoration: none;
      color: #595959;
      font-family: 'Rubik';
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }

    > a:last-child {
      margin-left: 1.5rem;
    }
  }
`;
