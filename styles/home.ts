import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
`;
