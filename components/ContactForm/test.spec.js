import React from 'react'
import renderer from 'react-test-renderer'
import ContactForm from './index'

describe('ContactForm', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <ContactForm />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

