import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Header from '.'

// const navigate = () => jest.fn()
const mockedUsedNavigate = jest.fn()
// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(() => jest.fn)
// }))

// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(navigate)
// }))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('<Header/>', () => {
  it('Deve renderizar o componente', async () => {
    render(<Header />)
    const logo = screen.getByAltText(/logo pokebola/i)
    expect(logo).toBeInTheDocument()
    fireEvent.click(logo)
    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalled()
    })
  })
})
