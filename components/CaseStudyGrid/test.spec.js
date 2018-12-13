import React from 'react'
import renderer from 'react-test-renderer'
import CaseStudyGrid from './index'

describe('CaseStudyGrid', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CaseStudyGrid />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
