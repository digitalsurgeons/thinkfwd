import React from 'react'
import renderer from 'react-test-renderer'
import StaggeredCTA from './index'

describe('StaggeredCTA', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <StaggeredCTA />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

