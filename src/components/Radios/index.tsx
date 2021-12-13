import { ChangeEvent, useState } from 'react'
import * as S from './styles'

type RadiosProps = {
  values: { search: string; radios: string }
  name: string
  value: string
  label: string
  onHandleRadios: (v: string) => void
}
const Radios = ({
  name,
  value,
  label,
  onHandleRadios,
  values
}: RadiosProps) => {
  const [valueRadio] = useState(value)
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    onHandleRadios(valueRadio)
  }
  return (
    <S.Wrapper>
      <input
        name={name}
        value={value}
        type="radio"
        checked={values.radios === valueRadio}
        onChange={onValueChange}
      />
      <label>{label}</label>
    </S.Wrapper>
  )
}

export default Radios
