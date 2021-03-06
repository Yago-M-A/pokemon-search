import { db } from './db'

export const firstUp = (name: string) => {
  return name[0].toUpperCase() + name.substring(1)
}

type itensProps = {
  ability: { name: string; url: string }
  is_hidden: boolean
  slot: number
}

type arrayAbilitiesProps = {
  name: string
  effect: string
}

type abilityProps = {
  name: string
  url: string
}

type effectProps = {
  effect: string
  language: { name: string; url: string }
  short_effect: string
}
export const getPokemon = async (pokemon: string) => {
  try {
    const { data } = await db.get(`pokemon/${pokemon}`)
    const nameLow: string = data.forms[0].name
    const name = firstUp(nameLow)
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

export const getAbilities = async (pokemon: string) => {
  try {
    const arrayAbilities: arrayAbilitiesProps[] = []
    const { data } = await db.get(`pokemon/${pokemon}`)
    const abilities = data.abilities.map((item: itensProps) => item.ability)
    console.log(abilities, 'habilidade')
    await Promise.all(
      abilities.map(async (ability: abilityProps) => {
        const nameLow = ability.name
        const abilityDetails = await db.get(`ability/${nameLow}`)
        const effects = abilityDetails.data.effect_entries
        effects.map((efeito: effectProps) => {
          if (efeito.language.name === 'en') {
            const name = firstUp(nameLow)
            arrayAbilities.push({ name, effect: efeito.effect })
          }
        })
      })
    )
    console.log(arrayAbilities, 'array')
    return arrayAbilities
  } catch (err) {
    return null
  }
}

type statProps = {
  base_stat: number
  effort: number
  stat: { name: string; url: string }
}

type arrayStatsProps = {
  name: string
  number: number
}

export const getStats = async (pokemon: string) => {
  try {
    const arrayStats: arrayStatsProps[] = []
    const { data } = await db.get(`pokemon/${pokemon}`)
    const stats = data.stats
    console.log(stats)
    stats.forEach((stat: statProps) => {
      const number = stat.base_stat
      const name = stat.stat.name
      arrayStats.push({ number, name })
    })
    console.log(arrayStats, 'stats')
    return arrayStats
  } catch (err) {
    return
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
