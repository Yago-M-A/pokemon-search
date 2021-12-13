import { render, screen } from '@testing-library/react'
import { CardPokemon } from '.'

describe('<CardPokemon/>', () => {
  it('Deve renderizar componente CardPokemon com os dados enviados', () => {
    render(<CardPokemon name="test" img="test" />)
    const image = screen.getByAltText('Pokémon test')
    const name = screen.getByRole('heading', { name: /test/ })
    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })
})
