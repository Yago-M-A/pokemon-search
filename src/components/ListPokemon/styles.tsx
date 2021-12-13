import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  border: 2px solid black;
  padding: 0.8rem 0.4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0.5rem #f90716;

  &:hover {
    transform: scale(1.1);
  }
  svg {
    width: 2rem;
    cursor: pointer;
  }
`
