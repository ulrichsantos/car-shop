import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors["base-header"]};
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderIcons = styled.div`
  display: flex;
  gap: 1.25rem;
  font-weight: 700;
  transition: 0.2s ease-in-out;

  p:hover {
    transform: scale(1.10);
  }
`

export const Contact = styled.div`
  
`