import styled from "styled-components";

export const ButtonHomePageComponent = styled.button`
  width: 15rem;
    height: 5rem;
    border: none;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    background: none;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors["base-white"]};
    transition: 0.3s;

    :hover {
      background: ${({ theme }) => theme.colors["base-blue-dark"]};
    }
`