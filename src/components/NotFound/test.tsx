import { render, screen } from '@testing-library/react'
import NotFound from '.'

describe('<NotFound/>', () => {
  it('should render component NotFound', () => {
    render(<NotFound />)
    const number = screen.getByRole('heading', { name: /404/i })
    const text = screen.getByRole('heading', {
      name: /...oops! something is missing/i
    })

    expect(number).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
