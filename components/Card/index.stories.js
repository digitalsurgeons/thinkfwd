import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Card from './index'

const mockData = {
  title: 'Title',
  description: 'Description',
  image: 'https://via.placeholder.com/500'
}

storiesOf('Card', module).add('default', () => <Card {...mockData} />)
