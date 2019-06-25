const nextRoutes = require('next-routes')

const routes = require('next-routes')
module.exports = routes()
  .add('index', '/')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
