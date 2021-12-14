import { useState } from 'react'
import * as S from './styles'

type statProps = {
  name: string
  number: number
}
type StatsProps = {
  stats: statProps[]
}

const Stats = ({ stats }: StatsProps) => {
  const [value] = useState(stats)
  return (
    <S.Wrapper>
      <h1>Stats</h1>
      {value.map((stat, id) => (
        <S.Stats key={id}>
          <h2>{stat.name}</h2>
          <p>{stat.number}</p>
        </S.Stats>
      ))}
    </S.Wrapper>
  )
}
export default Stats
