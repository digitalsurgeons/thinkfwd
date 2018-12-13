import React from 'react'
import renderer from 'react-test-renderer'
import FullWidthImage from './index'

describe('FullWidthImage', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <FullWidthImage />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

