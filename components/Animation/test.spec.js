import React from 'react'
import renderer from 'react-test-renderer'
import Animation from './index'

describe('Animation', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Animation />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

