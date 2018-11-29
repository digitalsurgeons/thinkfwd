import React from 'react'
import renderer from 'react-test-renderer'
import DoubleImageCta from './index'

describe('DoubleImageCta', () => {
  it('renders correctly', () => {
    const component = renderer.create(<DoubleImageCta />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
