import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ListPokemon from '../../components/ListPokemon'
import { getType } from '../../utils/getPokemon'
import * as S from './styles'

type PokemonProps = {
  name: string
  url: string
}

const Type = () => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState<PokemonProps[]>([])
  const { type } = useParams()
  const navigate = useNavigate()
  console.log(type)
  useEffect(() => {
    const fetch = async () => {
      const obj = await getType(type!)
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
  }, [navigate, type])
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

export default Type
