import styled from "styled-components";
import { ButtonHomePageComponent } from "./components/ButtonHome/styles";
import Swiper from "swiper";

export const HomeContainer = styled.div`
  width: 100%;
`

export const HomeInfo = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    width: 10rem;
    height: 2.5rem;
    border-radius: 6px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors["base-blue"]};
  }
`


export const ZeroCarContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  

  img {
    width: 70%;
    height: auto;
    margin-bottom: 1rem;
  }
`

export const ZeroCar = styled.div`
  width: 30%;
  gap: 2rem;
  padding: 5rem 2rem;
  text-align: start;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-orange"]};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    line-height: 1.5;
  }
`

export const ButtonTest = styled(ButtonHomePageComponent)``

export const SemiNewContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  

  img {
    width: 70%;
    height: auto;
  }
`

export const SemiNew = styled.div`
  width: 30%;
  gap: 2rem;
  padding: 5rem 2rem;
  text-align: start;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  > h2 {
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    color: ${({ theme }) => theme.colors["base-orange"]};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    line-height: 1.5;
  }
`
