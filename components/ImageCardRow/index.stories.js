import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ImageCardRow from './index'

const mockData = {
  link_text: [{ text: 'Lorem ipsum' }]
}

storiesOf('ImageCardRow', module).add('default', () => (
  <ImageCardRow primary={mockData} />
))
