import React from 'react'
import PropTypes from 'prop-types'

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">
          u guest the word lol
        </div>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats"></div>
    )
  }
}

Congrats.propTypes = {
  success: PropTypes.bool
}

export default Congrats