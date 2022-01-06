import * as S from './styles'
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'
import { useNavigate } from 'react-router-dom'

type ListPokemonProps = {
  name: string
  url: string
}

const ListPokemon = ({ name, url }: ListPokemonProps) => {
  const redirect = `/pokemon/${url}`
  const navigate = useNavigate()
  const handleClick = () => navigate(redirect)
  return (
    <S.Wrapper>
      <h2>{name}</h2>
      <ArrowRightCircle onClick={() => handleClick()} aria-label="Icon" />
    </S.Wrapper>
  )
}

export default ListPokemon
