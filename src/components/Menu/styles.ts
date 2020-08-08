import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background: #f2f2f2;
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 4rem;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }: { open: boolean }) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    font-family: 'Rubik';
    font-size: 1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #262626;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
