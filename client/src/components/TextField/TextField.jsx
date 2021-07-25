import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const TextField = ({ label, type, register }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...register} type={type} />
    </Fragment>
  )
}

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
}

TextField.defaultProps = {
  type: 'text',
}

export default TextField
