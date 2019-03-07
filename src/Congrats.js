import React from 'react'

export default (props) => {
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