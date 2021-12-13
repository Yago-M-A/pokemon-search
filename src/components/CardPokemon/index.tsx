import * as S from './styles'

type CardPokemonProps = {
  name: string
  img: string
}
export const CardPokemon = ({ name, img }: CardPokemonProps) => {
  return (
    <S.Wrapper>
      <img src={img} alt={`Pokémon ${name}`} />
      <h2>{name}</h2>
    </S.Wrapper>
  )
}
