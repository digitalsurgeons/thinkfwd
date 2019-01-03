const { Link } = require('next-apollo')

const routes = (module.exports = require('next-routes')({
  Link
}))
routes
  .add('index', '/')
  .add('contact', '/contact')
  .add('about', '/about')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
