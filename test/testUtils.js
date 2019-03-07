import checkPropTypes from 'check-prop-types'

export const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    conformingProps,
    'prop',
    Component.name,
  )
  expect(propError).toBeUndefined()
}