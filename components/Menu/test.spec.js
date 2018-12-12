import React from 'react'
import renderer from 'react-test-renderer'
import Menu from './index'

describe('Menu', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Menu />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

