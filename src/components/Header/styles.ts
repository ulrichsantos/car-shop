import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors["base-header"]};
  padding-inline: 1.5rem;
  z-index: 99;
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderIcons = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: 700;
  transition: 0.5s;

  p:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors["base-white"]};
  }  
`

export const Contact = styled.div`
  > button {
    border: none;
    background: ${({ theme }) => theme.colors["base-header"]};
    color: ${({ theme }) => theme.colors["base-white"]};

    :hover {
      color: ${({ theme }) => theme.colors["base-hover"]};
      transform: scale(1.05);
    }
  }
`