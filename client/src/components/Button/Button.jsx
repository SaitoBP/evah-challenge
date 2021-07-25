import React from 'react'

import PropTypes from 'prop-types'

const Button = ({ children, type }) => {
  return <button type={type}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit']).isRequired,
}

export default Button
