import React from 'react'
import { storiesOf } from '@storybook/react'
import CaseStudyGrid from './index'

const mockData = {
  link_text: [{ text: 'Lorem ipsum' }]
}

storiesOf('CaseStudyGrid', module).add('default', () => (
  <CaseStudyGrid primary={mockData} />
))
