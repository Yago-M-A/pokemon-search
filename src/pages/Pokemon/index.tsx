import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Abilities from '../../components/Abilities'
import { CardPokemon } from '../../components/CardPokemon'
import Stats from '../../components/Stats'
import { getPokemon, getAbilities, getStats } from '../../utils/getPokemon'
import * as S from './styles'

type objPokemonProps = {
  name: string
  img: string
}

type arrayAbilitiesProps = {
  name: string
  effect: string
}

type arrayStats = {
  number: number
  name: string
}

const Pokemon = () => {
  const [loading, setLoading] = useState(true)
  const [abilities, setAbilities] = useState<arrayAbilitiesProps[]>([])
  const [stats, setStats] = useState<arrayStats[]>([])
  const [objPokemon, setObjPokemon] = useState<objPokemonProps>(
    {} as objPokemonProps
  )
  const { pokemon } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      const data = await getPokemon(pokemon!)
      const habilidades = await getAbilities(pokemon!)
      const status = await getStats(pokemon!)
      console.log(habilidades)
      if (data && habilidades && status) {
        setAbilities(habilidades)
        setObjPokemon(data)
        setStats(status)
        setLoading(false)
        return
      }
      navigate('/')
      return
    }
    fetch()
  }, [navigate, pokemon]) //navigate, pokemon, abilities
  return (
    <>
      <S.Wrapper>
        {loading ? (
          <S.Loading />
        ) : (
          <CardPokemon name={objPokemon.name} img={objPokemon.img} />
        )}
      </S.Wrapper>
      {loading ? <S.Loading /> : <Abilities abilities={abilities} />}
      {loading ? <S.Loading /> : <Stats stats={stats} />}
    </>
  )
}

export default Pokemon
