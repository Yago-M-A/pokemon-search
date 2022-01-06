import { render, screen } from '@testing-library/react'
import Stats from '.'

const stats = [
  { name: 'Força', number: 90 },
  { name: 'Destreza', number: 80 }
]

describe('<Stats/>', () => {
  it('should render component Stats', () => {
    render(<Stats stats={stats} />)

    const title = screen.getByRole('heading', { name: /Stats/i })

    expect(title).toBeInTheDocument()
    const name = screen.getByRole('heading', { name: /força/i })
    const n = screen.getByText(90)

    expect(name).toBeInTheDocument()
    expect(n).toBeInTheDocument()
  })
})
