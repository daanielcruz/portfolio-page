import styled from 'styled-components';

export const Container = styled.main`
  padding: 1rem;
`;

export const Content = styled.div``;

export const Section = styled.section`
  margin-top: 1rem;
  border-bottom: 1px solid #c2c2c2;

  @media (min-width: 1100px) {
    display: flex;
    flex: 1;
    max-width: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0;
  }
`;

export const SectionTextBox = styled.div`
  font-size: 1.1rem;
  font-family: 'Roboto';
  font-weight: normal;
  color: #595959;
  text-align: center;
  > p:first-child {
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
    margin-bottom: 1rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.a`
  margin: 0.2rem;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;

export const ParagraphsBox = styled.div`
  > p:first-child {
    font-weight: bold;
    font-size: 1rem;
    color: black;
  }
  > small {
    font-size: 0.8rem;
  }
  > p:last-child {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;
