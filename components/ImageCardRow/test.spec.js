import React from 'react'
import renderer from 'react-test-renderer'
import ImageCardRow from './index'

describe('ImageCardRow', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ImageCardRow />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

