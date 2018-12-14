import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { IconContext } from 'react-icons'
import withApolloClient from '../lib/with-apollo-client'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={apolloClient}>
          <IconContext.Provider value={{ color: 'black' }}>
            <Component {...pageProps} />
          </IconContext.Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
