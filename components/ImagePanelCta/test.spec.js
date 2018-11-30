import React from 'react'
import renderer from 'react-test-renderer'
import ImagePanelCta from './index'

describe('ImagePanelCta', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ImagePanelCta />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

