import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.8rem;
  border: 2px solid black;
  width: 30rem;
  border-radius: 2rem;
  svg {
    width: 2.8rem;
  }
  input {
    background: none;
    font-size: 2rem;
    padding: 0.2rem 0.3rem;
    flex-grow: 1;
    outline: none;
    border: none;
  }
`
