import { db } from './db'

const getPokemon = async (pokemon: string) => {
  try {
    const { data } = await db.get(`pokemon/${pokemon}`)
    const name: string = data.forms[0].name
    const id = data.id
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${String(
      id
    )}.png`
    const obj = { name, img }
    return obj
  } catch (err) {
    return null
  }
}

type itemProps = {
  pokemon: { name: string; url: string }
}

export const getType = async (type: string) => {
  try {
    const { data } = await db.get(`type/${type}`)
    const pokemon = data.pokemon
    const obj = pokemon.map((item: itemProps) => {
      const { name } = item.pokemon
      return { name, url: name }
    })
    return obj
  } catch (err) {
    return null
  }
}

export const getAbility = async (ability: string) => {
  try {
    const { data } = await db.get(`ability/${ability}`)
    const pokemon = data.pokemon
    const obj = pokemon.map((item: itemProps) => {
      const { name } = item.pokemon
      return { name, url: name }
    })
    return obj
  } catch (err) {
    return null
  }
}

export default getPokemon
