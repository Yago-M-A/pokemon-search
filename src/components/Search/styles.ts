import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 130rem;
  background-color: white;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 2rem 3rem;
  border-radius: 2rem;

  h2 {
    color: red;
  }

  form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const divRadios = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-left: 1rem;
`

export const divInput = styled.div`
  display: flex;
  justify-content: center;
`

export const divButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #dad5ab;
    width: 25rem;
    cursor: pointer;
    border-radius: 4rem;
    font-weight: bold;
    font-size: 1.5rem;
    border: 2px solid black;
    transition: background 0.1s ease-in-out;
    box-shadow: 0 0 0.5rem #f90716;

    &:hover {
      background-color: #f90716;
      filter: brightness(0.8rem);
    }
  }
`
