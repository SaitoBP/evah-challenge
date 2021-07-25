import { createElement } from 'react'

import PropTypes from 'prop-types'

const Typography = props => {
  const { children, variant } = props

  return createElement(variant, {}, children)
}

Typography.propType = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['h1', 'h3', 'p']),
}

export default Typography
