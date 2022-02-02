const nextRoutes = require('next-routes')

const routes = require('next-routes')
module.exports = routes()
  .add('index', '/')
  .add('ui', '/ui')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
