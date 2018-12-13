import React from 'react'
import { storiesOf } from '@storybook/react'
import ImageCardGrid from './index'

const mockData = {
  link_text: [{ text: 'Lorem ipsum' }]
}

storiesOf('ImageCardGrid', module).add('default', () => (
  <ImageCardGrid primary={mockData} />
))
