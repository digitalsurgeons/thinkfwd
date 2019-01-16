import React from 'react'
import { storiesOf } from '@storybook/react'
import CaseStudyCard from './index'

const mockData = {
  title: 'District',
  subtitle:
    'We’ve built a $22M technology & innovation campus in Connecticut with this framework.',
  description: 'Description',
  image: '/static/img/district.jpg'
}

storiesOf('CaseStudyCard', module).add('default', () => (
  <CaseStudyCard {...mockData} />
))
