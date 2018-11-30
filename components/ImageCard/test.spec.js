import React from 'react'
import renderer from 'react-test-renderer'
import ImageCard from './index'

describe('ImageCard', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ImageCard />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

