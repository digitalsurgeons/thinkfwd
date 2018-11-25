const next = require('next')
const routes = require('./lib/routes')
const PORT = parseInt(process.env.PORT, 10) || 3000
const express = require('express')
const app = next({ dev: process.env.NODE_ENV !== 'production' })

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  if (query.slug === 'home') {
    res.redirect('/')
  }
  app.render(req, res, route.page, query)
})

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(PORT, () =>
      process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
    )
})
