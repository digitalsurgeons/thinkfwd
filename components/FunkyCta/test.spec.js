import React from 'react'
import renderer from 'react-test-renderer'
import FunkyCTA from './index'

describe('FunkyCTA', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <FunkyCTA />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

