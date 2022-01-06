import * as S from './styles'
import { Search } from '@styled-icons/material-outlined/Search'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

type InputProps = {
  label: string
  name: string
  initialstate: string
  onHandleInput: (v: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, name, onHandleInput, initialstate }: InputProps) => {
  const [value, setValue] = useState(initialstate)
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onHandleInput(newValue)
  }
  return (
    <S.InputWrapper>
      <Search aria-label="Icon de pesquisa" />
      <input
        type="text"
        aria-label={label}
        placeholder="Insert value"
        name={name}
        value={value}
        onChange={handleInput}
      />
    </S.InputWrapper>
  )
}

export default Input
