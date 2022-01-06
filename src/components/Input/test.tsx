import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

const label = 'Insert'
const name = 'name'
const onHandleInput = jest.fn()
const initialstate = ''
const text = 'pikachu'

describe('<Input/>', () => {
  it('should render component Input', async () => {
    render(
      <Input
        label={label}
        name={name}
        onHandleInput={onHandleInput}
        initialstate={initialstate}
      />
    )
    const icon = screen.getByLabelText(/icon de pesquisa/i)
    const input = screen.getByLabelText(/Insert/i)
    expect(icon).toBeInTheDocument()
    expect(input).toBeInTheDocument()

    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onHandleInput).toHaveBeenCalled()
    })
  })
})
