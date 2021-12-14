import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 2rem;
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 0 2rem 0;
  text-align: center;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`
export const Ability = styled.div`
  /* z-index: 99; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  border: 2px solid black;
  padding: 0.8rem 0.4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0.5rem #f90716;
  margin: 2rem 1rem 0 1rem;
  background-color: white;

  &:hover {
    transform: scale(1.1);
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`
