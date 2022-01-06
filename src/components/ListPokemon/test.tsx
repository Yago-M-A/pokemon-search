import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'
import ListPokemon from '.'

const name = 'Pikachu'
const url = 'pikachu'
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('<ListPokemon/>', () => {
  it('should render the component ListPokemon', async () => {
    render(
      <Router>
        <ListPokemon name={name} url={url} />
      </Router>
    )

    const text = screen.getByRole('heading', { name: /pikachu/i })
    const icon = screen.getByLabelText(/icon/i)

    expect(text).toBeInTheDocument()
    expect(icon).toBeInTheDocument()

    //click icon and call useNavigate()
    userEvent.click(icon)
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled()
    })
  })
})
