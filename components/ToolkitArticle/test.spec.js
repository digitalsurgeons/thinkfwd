import React from 'react'
import renderer from 'react-test-renderer'
import ToolkitArticle from './index'

describe('ToolkitArticle', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ToolkitArticle />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

