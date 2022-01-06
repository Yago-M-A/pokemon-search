import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import Search from '.'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}))

describe('<Search/>', () => {
  it('should render the component Search and insert Pokémon and select radios', async () => {
    render(
      <Router>
        <Search />
      </Router>
    )
    const input = screen.getByRole('textbox')
    const radios = screen.getAllByRole('radio')
    const button = screen.getByRole('button', { name: /search/i })
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    radios.map((radio) => {
      expect(radio).toBeInTheDocument()
    })

    userEvent.click(radios[2])
    userEvent.type(input, 'pikachu')
    userEvent.click(button)
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalled()
    })
  })

  it('should render the component Search and insert Ability and select radios', async () => {
    render(
      <Router>
        <Search />
      </Router>
    )
    const input = screen.getByRole('textbox')
    const radios = screen.getAllByRole('radio')[0]
    const button = screen.getByRole('button', { name: /search/i })
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    userEvent.click(radios)
    userEvent.type(input, 'sturdy')
    userEvent.click(button)
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalled()
    })
  })

  it('should render the component Search and insert Ability and select radios', async () => {
    render(
      <Router>
        <Search />
      </Router>
    )
    const input = screen.getByRole('textbox')
    const radios = screen.getAllByRole('radio')[1]
    const button = screen.getByRole('button', { name: /search/i })
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    userEvent.click(radios)
    userEvent.type(input, 'flying')
    userEvent.click(button)
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalled()
    })
  })

  it('should render the component Search with input empty', async () => {
    render(
      <Router>
        <Search />
      </Router>
    )

    const radio = screen.getAllByRole('radio')[2]
    const button = screen.getByRole('button', { name: /search/i })
    expect(radio).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    userEvent.click(radio)
    userEvent.click(button)
    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalled()
      expect(
        screen.getByRole('heading', { name: /empty field/i })
      ).toBeInTheDocument()
    })
  })
})
