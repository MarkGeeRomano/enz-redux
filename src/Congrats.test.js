import React from 'react'
import { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findTestByAttr, checkProps } from '../test/testUtils'
import Congrats from './Congrats'

const defaultProps = { success: false }
function setup(props = {}) {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps}/>)
}

it('should render without err', () => {
  const wrapper = setup()
  const component = findTestByAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

it('renders no text when setup prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findTestByAttr(wrapper, 'component-congrats')
  expect(component.text().length).toBe(0)
})

it('renders text when setup prop is true', () => {
  const wrapper = setup({ success: true })
  const component = findTestByAttr(wrapper, 'component-congrats')
  expect(component.text().length).not.toBe('')
})

it('doesnt throw any errors with expected prop type', () => {
  checkProps(Congrats, { success: false })
})