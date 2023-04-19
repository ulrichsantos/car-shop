import styled from "styled-components";

export const ServicesContainer = styled.div`
  .wrapper {
    display: flex;
    width: 100%;
  }

  line-height: 1.5rem;

  img {
    width: 100%;
  }
`

export const ServicesInfos = styled.div`
  padding: 2rem;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`

export const ServicesInfoPiece = styled.div`
  padding-inline: 2rem;

  img {
    width: 100%;
    height: 50%;
  }

  h2 {
    margin-block: 0.5rem;
  }

  hr {
    width: 100%;
    border-color: ${({theme}) => theme.colors["base-error"]};
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2rem;
    width: 100%;
  }
`

export const ServicesSchedule = styled.div`
  padding: 2rem;
  display: flex;
  gap: 1.5rem;

  img {
    width: 50%;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }

  button {
    width: 15rem;
    height: 5rem;
    background: none;
    font-weight: bold;
    border: 2px solid ${({theme}) => theme.colors["base-error"]};
    color: ${({theme}) => theme.colors["base-white"]};
    transition: 0.3s;

    :hover {
      background: ${({theme}) => theme.colors["base-error"]};
      color: ${({theme}) => theme.colors["base-black"]};
      font-weight: bold;
    }
  }
`