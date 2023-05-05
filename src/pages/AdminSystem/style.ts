import styled from "styled-components";

export const AdminSystemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding-block: 3rem;
  border-radius: 8px;

  form {
    width: 70%;
    padding: 2rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${({theme}) => theme.colors["base-header"]};


    label {
      margin-bottom: 0.3rem;
      font-size: ${({theme}) => theme.textSizes["text-regular-l"]};
    }

    input {
      height: 1.7rem;
      margin-bottom: 1rem;
      border-radius: 4px;
      border: none;
      padding: 0.5rem;
    }

    select {
      width: 20%;
      height: 1.7rem;
      font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
      height: 1.7rem;
      border-radius: 8px;
      border: none;
      transition: 0.3s;

      :hover {
        background: ${({theme}) => theme.colors["base-hover"]};
      }
    }
  }
`