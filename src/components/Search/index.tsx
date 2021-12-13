import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input'
import Radios from '../Radios'
import * as S from './styles'

const Search = () => {
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const [values, setValues] = useState({ search: '', radios: '' })
  const handleSearch = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { search, radios } = values
    if (search === '' || radios === '') {
      setIsError(true)
      return
    }
    const searchLowCase = search.toLowerCase()
    setIsError(false)
    setValues({ ...values, radios: '' })
    navigate(`${radios}/${searchLowCase}`)
  }
  return (
    <S.Wrapper>
      {!!isError && <h2>Empty Field</h2>}
      <form onSubmit={handleSubmit}>
        <S.divRadios>
          <Radios
            values={values}
            label="Ability"
            name="Ability"
            value="ability"
            onHandleRadios={(v) => handleSearch('radios', v)}
          />
          <Radios
            values={values}
            label="Type"
            name="Type"
            value="type"
            onHandleRadios={(v) => handleSearch('radios', v)}
          />
          <Radios
            values={values}
            label="Pokémon"
            name="Pokémon"
            value="pokemon"
            onHandleRadios={(v) => handleSearch('radios', v)}
          />
        </S.divRadios>
        <S.divInput>
          <Input
            label="Insert:"
            initialstate=""
            onHandleInput={(v) => handleSearch('search', v)}
            name="search"
          />
        </S.divInput>
        <S.divButton>
          <button type="submit">Search</button>
        </S.divButton>
      </form>
    </S.Wrapper>
  )
}

export default Search
