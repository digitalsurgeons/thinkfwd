import React from 'react'
import renderer from 'react-test-renderer'
import PersonGrid from './index'

describe('PersonGrid', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <PersonGrid />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

