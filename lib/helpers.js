import Error from 'next/error'
import { breakpoints } from './settings'

export const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === 'toolkit') return `/toolkits/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return `/doc/${doc.id}`
}

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

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
