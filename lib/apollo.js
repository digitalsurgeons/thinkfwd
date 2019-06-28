import withApollo from 'next-with-apollo-hooks'
import ApolloClient from 'apollo-client'
import { PrismicLink } from 'apollo-link-prismic'
import {
  IntrospectionFragmentMatcher,
  InMemoryCache
} from 'apollo-cache-inmemory'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: { types: [] }
  }
})
const cache = new InMemoryCache({ fragmentMatcher })

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      link: new PrismicLink({
        uri: 'https://thinkfwd.prismic.io/graphql'
      }),
      cache
    })
)
