import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BigText from './index'

const mockData = { heading: [{ text: 'Lorem ipsum' }] }

storiesOf('BigText', module).add('default', () => (
  <BigText primary={mockData} />
))
