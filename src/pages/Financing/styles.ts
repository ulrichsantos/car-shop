import styled from "styled-components";

export const FinancingSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const FinancingTitle = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    color: ${({ theme }) => theme.colors["base-error-dark"]};
    font-weight: bold;
  }

  img {
    width: 100%;
    height: auto;
  }
`

export const FinancingForm = styled.form`
  width: 80%;
  margin-top: 4rem;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-header"]};
  border-radius: 8px;
  margin-bottom: 5rem;

  > h1 {
    margin-bottom: 2rem;
  };
  
  > form {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    > p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-white"]};
  }

    > input {
      width: 100%;
      height: 2rem;
      border-radius: 8px;
      border: none;
      padding: 0.25rem;
      margin-bottom: 0.75rem;
    }
  }

  
`