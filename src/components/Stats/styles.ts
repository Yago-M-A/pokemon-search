import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 2rem;
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 0 2rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`

export const Stats = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 30rem;
  border: 2px solid black;
  padding: 0.8rem 0.4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0.5rem #f90716;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
