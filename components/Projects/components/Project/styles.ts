import styled from "styled-components";

export const Content = styled.div`
  height: 100vh;
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5%;
`;

export const TopInfo = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const RoleInfo = styled.strong``;

export const Number = styled.span``;

export const MockUpContainer = styled.div`
  max-width: 100%;
  max-height: 70%;
  display: flex;
  justify-content: center;
`;

export const MockUp = styled.img`
  justify-content: center;
  max-width: ${({type}: {type: string}) =>
    type === "desktop" ? "80%" : " 40%"};
  object-fit: contain;
`;

export const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Presentation = styled.div`
  color: white;
  > span {
    display: block;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const Icon = styled.a`
  color: white;
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
