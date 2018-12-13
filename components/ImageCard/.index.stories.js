import React from 'react'
import { storiesOf } from '@storybook/react'
import ImageCard from './index'

const mockData = {
  title: 'District',
  subtitle:
    'We’ve built a $22M technology & innovation campus in Connecticut with this framework.',
  description: 'Description',
  image: '/static/img/district.jpg'
}

storiesOf('ImageCard', module).add('default', () => <ImageCard {...mockData} />)
