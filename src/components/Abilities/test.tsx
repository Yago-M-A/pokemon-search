import { render, screen } from '@testing-library/react'
import Abilities from '.'

const abilities = [
  { name: 'Raio', effect: 'Lança um raio' },
  { name: 'Fogo', effect: 'Lança fogo' }
]

describe('<Abilities/>', () => {
  it('should render component Abilities', () => {
    render(<Abilities abilities={abilities} />)

    const title = screen.getByRole('heading', { name: /abilities/i })
    const name = screen.getByRole('heading', { name: /raio/i })
    const effect = screen.getByText(/lança um raio/i)
    expect(title).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(effect).toBeInTheDocument()
  })
})
