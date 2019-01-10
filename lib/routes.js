const { Link } = require('next-apollo')
const nextRoutes = require('next-routes')

const routes = (module.exports = nextRoutes({
  Link
}))

routes
  .add('index', '/')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
