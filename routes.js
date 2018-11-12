const routes = require('next-routes')

module.exports = routes()
  .add('index', '/')
  .add('page', '/:slug')
  .add('toolkit', '/toolkits/:slug')
