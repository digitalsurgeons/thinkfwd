import React from 'react'
import renderer from 'react-test-renderer'
import Masthead from './index'

describe('Masthead', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Masthead />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
