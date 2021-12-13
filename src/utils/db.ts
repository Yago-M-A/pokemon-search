import axios from 'axios'

export const db = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})
