import React from 'react'
import renderer from 'react-test-renderer'
import CaseStudyCard from './index'

describe('CaseStudyCard', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CaseStudyCard />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
