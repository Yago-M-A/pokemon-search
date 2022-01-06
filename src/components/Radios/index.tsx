import { useState } from 'react'
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

  return (
    <S.Wrapper>
      <input
        name={name}
        value={value}
        type="radio"
        checked={values.radios === valueRadio}
        onChange={() => onHandleRadios(valueRadio)}
      />
      <label>{label}</label>
    </S.Wrapper>
  )
}

export default Radios
