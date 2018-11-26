import React from 'react'
import pascalCase from 'pascal-case'
import styled from 'styled-components'
import Error from 'next/error'
import { Router } from './routes'
import { format, resolve, parse } from 'url'
import { breakpoints, gutter } from './settings'

export const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === 'toolkit') return `/toolkit/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  return `/`
}

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const Container = styled.div({
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto',
  padding: '0 20px',
  [`@media (min-width: ${breakpoints[3] + gutter * 2}px)`]: {
    padding: 0
  }
})

export const getComponent = component => {
  const componentName = pascalCase(component.type)
  const Component = require(`../components/${componentName}`).default
  return (
    <Component
      key={component.type}
      primary={component.primary}
      fields={component.fields}
    />
  )
}

// Workaround for throwing 404 error in render method
// https://github.com/zeit/next.js/issues/4452
export const throw404 = () => {
  if (process.browser) {
    return <Error statusCode={404} />
  } else {
    const e = new Error()
    e.code = 'ENOENT'
    throw e
  }
}
