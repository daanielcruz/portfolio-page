import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  @media (min-width: 1100px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #262626;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: { open: boolean }) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: { open: boolean }) => (open ? '0' : '1')};
      transform: ${({ open }: { open: boolean }) =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: { open: boolean }) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
