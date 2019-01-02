import { withData } from 'next-apollo'
import { PrismicLink } from 'apollo-link-prismic'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'

const createCache = () => {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
      __schema: { types: [] }
    }
  })

  return new InMemoryCache({ fragmentMatcher })
}

const config = {
  link: new PrismicLink({
    uri: 'https://thinkfwd.prismic.io/graphql'
  }),
  createCache
}

export default withData(config)
