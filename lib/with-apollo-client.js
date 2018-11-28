import React from 'react'
import initApollo from './init-apollo'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'

export default App => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx) {
      const { Component, router } = ctx
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo()

      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <App
            {...appProps}
            ctx={ctx}
            Component={Component}
            apolloClient={apollo}
          />,
          {
            router: {
              asPath: ctx.asPath,
              pathname: ctx.pathname,
              query: ctx.query
            },
            client: apollo
          }
        )
      } catch (error) {}

      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState
      }
    }

    constructor(props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}
