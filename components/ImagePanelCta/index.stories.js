import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ImagePanelCta from './index'

const mockData = {
  link_text: [{ text: 'Lorem ipsum' }]
}

storiesOf('ImagePanelCta', module).add('default', () => (
  <ImagePanelCta primary={mockData} />
))
