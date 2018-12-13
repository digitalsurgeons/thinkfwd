import React from 'react'
import renderer from 'react-test-renderer'
import PersonCard from './index'

describe('PersonCard', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <PersonCard />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

