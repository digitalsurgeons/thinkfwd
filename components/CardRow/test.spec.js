import React from 'react'
import renderer from 'react-test-renderer'
import CardRow from './index'

describe('CardRow', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CardRow />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
