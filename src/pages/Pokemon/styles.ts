import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 2rem;
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 0 2rem 0;
`

export const Loading = styled.div`
  margin: 0 auto;
  width: 15rem;
  height: 15rem;
  border: 8px solid rgb(0, 0, 0, 0.1);
  border-left-color: #f90716;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
