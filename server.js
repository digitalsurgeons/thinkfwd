const next = require('next')
const routes = require('./lib/routes')
const PORT = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })

const handler = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  )
  app.render(req, res, route.page, query)
})

const express = require('express')

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(PORT, () =>
      process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
    )
})
