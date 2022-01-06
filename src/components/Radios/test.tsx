import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Radios from '.'

const values = { search: '', radios: '' }
const label = 'Ability'
const name = 'Ability'
const value = 'ability'
const onHandleRadios = jest.fn()

describe('<Radios/>', () => {
  it('should render the component Radios', async () => {
    render(
      <Radios
        values={values}
        label={label}
        name={name}
        value={value}
        onHandleRadios={onHandleRadios}
      />
    )

    const text = screen.getByText(/ability/i)
    const radios = screen.getByRole('radio')
    expect(text).toBeInTheDocument()
    expect(radios).toBeInTheDocument()

    userEvent.click(radios)
    await waitFor(() => {
      expect(onHandleRadios).toHaveBeenCalled()
    })
  })
})
