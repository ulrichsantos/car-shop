import styled from "styled-components";

export const CardCarSemiNewContainer = styled.div`
  width: 20rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors["base-header"]};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

  .wrapper {
    position: relative;
    top: -0.5rem;
    padding: 1.5rem;
  }
  
  img {
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
  }

  h3 {
    font-size: ${({ theme}) => theme.textSizes["text-regular-m"]};
    color: ${({ theme }) => theme.colors["base-error"]};
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    font-weight: 700;
  }

  p {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    font-weight: 700;
  }
`

export const CardCarSemiNewInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 0.3rem;
`