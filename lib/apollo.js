import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks'

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

const link = new HttpLink({
   uri: process.env.GRAPHQL_API,
});

export default withApollo(
  ({ ctx, headers,initialState }) => {
    return new ApolloClient({
     link, cache
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
