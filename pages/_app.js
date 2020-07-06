import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import NextSeo from 'next-seo'
import SEO from '../next-seo.config'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'emotion-theming'
import theme from '../lib/settings'
import withApollo from '../lib/apollo'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <ThemeProvider theme={{ mode: 'light' }}>
            <IconContext.Provider value={{ color: 'black' }}>
              <NextSeo config={SEO} />
              <Component {...pageProps} />
            </IconContext.Provider>
          </ThemeProvider>
      </>
    )
  }
}

export default withApollo(MyApp)
