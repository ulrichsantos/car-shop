import styled from "styled-components";

export const FinancingSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  text-align: center;
`

export const FinancingTitle = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 2.5rem;

  > h1 {
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    color: ${({ theme }) => theme.colors["base-orange"]};
  }
`

export const FinancingForm = styled.form`
  width: 80%;
  margin-top: 4rem;
  text-align: start;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["base-label"]};

  > h1 {
    margin-bottom: 2rem;
  };
  
  > form {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    > p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-black"]};
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