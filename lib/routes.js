const routes = (module.exports = require('next-routes')())
routes
  .add('index', '/')
  .add('contact', '/contact')
  .add('about', '/about')
  .add('page', '/:slug')
  .add('toolkit', '/toolkit/:slug')
