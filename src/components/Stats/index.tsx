import * as S from './styles'

type statProps = {
  name: string
  number: number
}
type StatsProps = {
  stats: statProps[]
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <S.Wrapper>
      <h1>Stats</h1>
      {stats.map((stat, id) => (
        <S.Stats key={id}>
          <h2>{stat.name}</h2>
          <p>{stat.number}</p>
        </S.Stats>
      ))}
    </S.Wrapper>
  )
}
export default Stats
