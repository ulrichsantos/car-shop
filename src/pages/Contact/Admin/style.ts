import styled from "styled-components";

export const AdminPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

export const AdminForm = styled.div`
  width: 40%;
  padding: 2rem 3rem;
  border-radius: 8px;
  background: ${({theme}) => theme.colors["base-blue-dark"]};

  form {
    display: flex;
    flex-direction: column;
  }

  hr {
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 1rem;
    height: 2rem;
    padding: 0.3rem;

    :focus {
      border: 2px solid ${({theme}) => theme.colors["base-hover"]};
    }
  }

  button {
    margin-top: 1rem;
    height: 2rem;
  }
`