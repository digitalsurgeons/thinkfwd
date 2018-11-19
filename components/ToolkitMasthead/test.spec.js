import React from 'react'
import renderer from 'react-test-renderer'
import ToolkitMasthead from './index'

describe('ToolkitMasthead', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ToolkitMasthead />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

