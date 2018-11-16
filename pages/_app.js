import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { IconContext } from 'react-icons'
import withApolloClient from '../lib/with-apollo-client'
import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <IconContext.Provider
            value={{ color: 'black', className: 'global-class-name' }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </IconContext.Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
