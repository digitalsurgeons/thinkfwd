import React from 'react'
import renderer from 'react-test-renderer'
import FunkyHeadings from './index'

describe('FunkyHeadings', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <FunkyHeadings />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

