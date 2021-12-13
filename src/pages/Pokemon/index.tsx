import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CardPokemon } from '../../components/CardPokemon'
import getPokemon from '../../utils/getPokemon'
import * as S from './styles'

type objPokemonProps = {
  name: string
  img: string
}

const Pokemon = () => {
  const [loading, setLoading] = useState(true)
  const [objPokemon, setObjPokemon] = useState<objPokemonProps>(
    {} as objPokemonProps
  )
  const { pokemon } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemon(pokemon!)
      console.log(data)
      if (data) {
        setLoading(false)
        setObjPokemon(data)
        return
      }
      navigate('/')
      return
    }
    fetch()
  }, [navigate, pokemon])
  return (
    <S.Wrapper>
      {loading ? (
        <S.Loading />
      ) : (
        <CardPokemon name={objPokemon.name} img={objPokemon.img} />
      )}
    </S.Wrapper>
  )
}

export default Pokemon
