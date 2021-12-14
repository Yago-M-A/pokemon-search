import { useState } from 'react'
import * as S from './styles'

type abilitiesProps = {
  name: string
  effect: string
}
type AbilitiesProps = {
  abilities: abilitiesProps[]
}

const Abilities = ({ abilities }: AbilitiesProps) => {
  const [value] = useState(abilities)
  return (
    <S.Wrapper>
      <h1>Abilities</h1>
      {value.map((ability, id) => (
        <S.Ability key={id}>
          <h2>{ability.name}</h2>
          <p>{ability.effect}</p>
        </S.Ability>
      ))}
    </S.Wrapper>
  )
}
export default Abilities
