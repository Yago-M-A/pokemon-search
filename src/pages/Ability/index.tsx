import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ListPokemon from '../../components/ListPokemon'
import { getAbility } from '../../utils/getPokemon'
import * as S from './styles'

type PokemonProps = {
  name: string
  url: string
}

type Ability = {
  ability: string
}

const Ability = () => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState<PokemonProps[]>([])
  const { ability } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      const obj = await getAbility(ability!)
      if (obj) {
        setLoading(false)
        setPokemon(obj)
        return
      }
      setLoading(false)
      navigate('/')
      return
    }
    fetch()
  }, [navigate, ability])
  return (
    <S.Wrapper loadingWrapper={loading}>
      {loading ? (
        <S.Loading />
      ) : (
        pokemon.map((item) => (
          <ListPokemon key={item.name} name={item.name} url={item.url} />
        ))
      )}
    </S.Wrapper>
  )
}

export default Ability
