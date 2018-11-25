import React from 'react'
import renderer from 'react-test-renderer'
import LogoWall from './index'

describe('LogoWall', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <LogoWall />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

