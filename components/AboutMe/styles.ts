import styled from "styled-components";

export const Content = styled.section`
  padding: 5% 10%;
  height: 100vh;
  @media (min-width: 990px) {
    height: 100vh;
    padding: 20% 18%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`;

export const TranslateContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 5%;
  transition: 0.3s;

  > span {
    font-size: 22px;
  }

  > span:nth-child(2) {
    color: darkgray;
  }

  > span:first-child,
  span:last-child {
    cursor: pointer;
    font-size: 22px;
  }

  > span:first-child:hover,
  span:last-child:hover {
    opacity: 0.5;
  }
`;

export const TitleName = styled.h1`
  font-size: 35px;
`;

export const Qualities = styled.div`
  margin-top: 10%;
  > strong:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: 990px) {
    margin-top: 20%;
  }
`;

export const Quality = styled.strong`
  font-size: 30px;
  display: block;
  color: #555;
`;

export const Description = styled.p`
  margin-top: 10%;
`;

export const IconsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  height: 50px;
`;

export const Icon = styled.a`
  color: #56baec;
  opacity: 0.5;

  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10%;
`;

export const ContactMe = styled.a`
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  padding: 15px 24px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  background: #007bfc;
  opacity: 0.7;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;
