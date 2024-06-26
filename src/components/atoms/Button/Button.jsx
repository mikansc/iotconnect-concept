import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles'

export const Button = forwardRef(({ children, fullWidth, ...props }, ref) => {
  return (
    <StyledButton aria-label={children} $fullWidth={fullWidth} ref={ref} {...props}>
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool
}
