import React from 'react'
import renderer from 'react-test-renderer'
import EventsPanel from './index'

describe('EventsPanel', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <EventsPanel />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

