import React from 'react'
import renderer from 'react-test-renderer'
import ImageCardGrid from './index'

describe('ImageCardGrid', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ImageCardGrid />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
