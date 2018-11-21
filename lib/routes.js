const routes = (module.exports = require('next-routes')())
routes
  .add('index', '/')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
