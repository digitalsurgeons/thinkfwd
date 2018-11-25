import React from 'react'
import renderer from 'react-test-renderer'
import BigText from './index'

describe('BigText', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <BigText />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

