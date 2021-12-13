import styled from 'styled-components'
// #f90716

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid #142f43;
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem #142f43;
    }

    &:before {
      content: '';
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #f90716;
      transition: opacity 0.1s ease-in-out;
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  }
  label {
    font-size: 1.5rem;
    cursor: pointer;
  }
`
