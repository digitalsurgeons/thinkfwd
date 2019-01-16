import React from 'react'
import { storiesOf } from '@storybook/react'
import CallToAction from './index'

const mockData = {
  heading: [{ text: 'Lorem ipsum' }],
  link_text: [{ text: 'Lorem ipsum' }],
  link: {
    _meta: { type: 'Page', uid: 'toolkit' }
  }
}

storiesOf('CallToAction', module).add('default', () => (
  <CallToAction primary={mockData} />
))
