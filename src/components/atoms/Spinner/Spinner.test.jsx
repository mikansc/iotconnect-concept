import { screen } from '@testing-library/react'
import { render } from '@test-utils'
import { Spinner } from './Spinner'

describe('@atom/Separator', () => {
  it('should match snapshot', () => {
    render(<Spinner />)
    expect(screen.getByTestId('app-spinner')).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ gMwMIq"
        data-testid="app-spinner"
      />
    `)
  })
})
