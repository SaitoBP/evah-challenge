import React from 'react'

import PropTypes from 'prop-types'

const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  onClick: PropTypes.func,
}

export default Button
