import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  background: ${({ theme }) => theme.colors["base-background-dark"]};

  > h1 {
    font-size: ${({theme }) => theme.textSizes["title-title-l"]};
  }

  > p {
    font-size: ${({theme }) => theme.textSizes["text-regular-s"]};
    color: ${({theme }) => theme.colors["base-hover"]};
  }
`

export const FooterIcons = styled.div`
  display: flex;
  gap: 2rem;
`