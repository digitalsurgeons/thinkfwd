import React from 'react'
import renderer from 'react-test-renderer'
import EventsGrid from './index'

describe('EventsGrid', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <EventsGrid />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

