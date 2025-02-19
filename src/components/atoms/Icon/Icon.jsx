import PropTypes from 'prop-types'

import { StyledSpan } from './Icon.styles'

export const Icon = ({ name = 'question_mark', color, size, ...props }) => {
  return (
    <StyledSpan
      $color={color}
      $size={size}
      className="material-icons"
      {...props}
      data-testid="app-icon"
    >
      {name}
    </StyledSpan>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}
