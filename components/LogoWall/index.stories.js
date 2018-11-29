import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LogoWall from './index'

const mockData = {
  heading: [
    {
      text:
        'Our thought partners and curriculum have manifested transformational change for:'
    }
  ]
}

storiesOf('LogoWall', module).add('default', () => (
  <LogoWall primary={mockData} />
))
