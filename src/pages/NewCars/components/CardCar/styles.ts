import styled from "styled-components";

export const CardCarContainer = styled.div`
  width: 15rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  img {
    position: relative;
    top: 3rem;
  }

  > h1 {
    font-size: ${({ theme}) => theme.textSizes["title-title-m"]};
  }

  > span {
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    color: ${({ theme }) => theme.colors["base-error"]};
    font-weight: 700;
  }
`