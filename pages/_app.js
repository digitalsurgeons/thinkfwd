import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { IconContext } from 'react-icons'
import { ThemeProvider } from 'emotion-theming'
import theme from '../lib/settings'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={{ mode: 'light' }}>
          <IconContext.Provider value={{ color: 'black' }}>
            <Component {...pageProps} />
          </IconContext.Provider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
