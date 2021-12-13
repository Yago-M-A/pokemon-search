import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 1rem;
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem 0 0.8rem 0;

  img {
    border: 2px solid black;
    border-radius: 10px;
    width: 90%;
    object-fit: cover;
  }

  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }
`
