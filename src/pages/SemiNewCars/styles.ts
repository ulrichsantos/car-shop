import styled from "styled-components";

export const SemiNewCarsContainer = styled.section`
  width: 100%;
  padding: 2rem;
  margin-bottom: 5rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const SemiNewCarsFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  gap: 1rem;
  margin-bottom: 8rem;
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};

  

  h3 {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    color: ${({theme}) => theme.colors["base-gray"]};
    border: 1px solid ${({theme}) => theme.colors["base-gray"]};
    border-radius: 4px;
    margin-right: 1rem;

    :hover {
      border: 1px solid ${({theme}) => theme.colors["base-black"]};
    }

    :focus {
      color: ${({theme}) => theme.colors["base-black"]};
    }
  }

  button {
    padding: 0.5rem;
    color: ${({theme}) => theme.colors["base-black"]};
    background-color: ${({theme}) => theme.colors["base-white"]};
    border: 1px solid ${({theme}) => theme.colors["base-gray"]};
    border-radius: 4px;
    margin-right: 1rem;

    :hover {
      border: 1px solid ${({theme}) => theme.colors["base-black"]};
    }
  }

  form {
    display: flex;
  }

  select {
    width: 90%;
    height: auto;
    padding: 0.5rem;
    color: ${({theme}) => theme.colors["base-black"]};
    background-color: ${({theme}) => theme.colors["base-white"]};
    border: 1px solid ${({theme}) => theme.colors["base-gray"]};
    border-radius: 4px;
    margin-right: 1rem;
    text-align: left;
    font-size: ${({theme}) => theme.textSizes["text-regular-m"]};
    cursor: pointer;

    :hover {
      border: 1px solid ${({theme}) => theme.colors["base-black"]};
    }
  }
`