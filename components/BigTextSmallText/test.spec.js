import React from 'react'
import renderer from 'react-test-renderer'
import BigTextSmallText from './index'

describe('BigTextSmallText', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <BigTextSmallText />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

