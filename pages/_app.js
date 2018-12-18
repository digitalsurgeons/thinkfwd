import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { IconContext } from 'react-icons'
import withApolloClient from '../lib/with-apollo-client'
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
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={{ mode: 'light' }}>
            <IconContext.Provider value={{ color: 'black' }}>
              <Component {...pageProps} />
            </IconContext.Provider>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
