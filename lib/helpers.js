import Error from 'next/error'

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
