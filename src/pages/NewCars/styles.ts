import styled from "styled-components";

export const NewCarContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  

  img {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
`

export const NewCarsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
  margin-bottom: 2rem;

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-inline: 2rem;
    gap: 1rem;
  }
`

