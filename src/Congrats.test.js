import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findTestByAttr } from '../test/testUtils'
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter })

function setup(props = {}) {
  return shallow(<Congrats {...props}/>)
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