import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
  }

  strong {
    line-height: 1.5rem;
  }
`

export const AdmButton = styled.button`
  width: 20%;
  height: 3rem;
  border: none;
  background: ${({theme}) => theme.colors["base-blue"]};
 border-radius: 4px;
  transition: 0.3s;

  :hover {
    background: ${({theme}) => theme.colors["base-blue-dark"]};
    font-weight: 600;
  }
`