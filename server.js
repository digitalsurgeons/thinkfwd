const next = require('next')
const routes = require('./lib/routes')
const express = require('express')
const axios = require('axios')
const moment = require('moment')

const app = next({ dev: process.env.NODE_ENV !== 'production' })

const handler = routes.getRequestHandler(
  app,
  async ({ req, res, route, query }) => {
    if (query.slug === 'home') {
      res.redirect('/')
    }
    app.render(req, res, route.page, query)
  }
)

const robotsOptions = {
  root: __dirname + '/public/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
}

const sitemapOptions = {
  root: __dirname + '/public/static/',
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8'
  }
}

const faviconOptions = {
  root: __dirname + '/public/static/'
}

app.prepare().then(() => {
  const PORT = parseInt(process.env.PORT, 10) || 3000
  express()
    .get('/robots.txt', (req, res) =>
      res.status(200).sendFile('robots.txt', robotsOptions)
    )
    .get('/sitemap.xml', (req, res) =>
      res.status(200).sendFile('sitemap.xml', sitemapOptions)
    )
    .get('/favicon.ico', (req, res) =>
      res.status(200).sendFile('favicon.ico', faviconOptions)
    )

    .use(handler)
    .listen(PORT, () =>
      process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`)
    )
})
