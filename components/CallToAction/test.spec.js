import React from 'react'
import renderer from 'react-test-renderer'
import CallToAction from './index'

describe('CallToAction', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CallToAction />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

