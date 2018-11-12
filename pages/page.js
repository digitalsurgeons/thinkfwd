import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from 'next/error'
import { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import getComponent from '../lib/getComponent'

export const allPagesQuery = gql`
  query allPages($uid: String!) {
    allPages(uid: $uid) {
      edges {
        node {
          _meta {
            uid
          }
          body {
            ... on PageBodyHeader {
              type
              primary {
                title
                headline
              }
            }
            ... on PageBodyToolkits {
              type
            }
            ... on PageBodyNewsletter_signup {
              type
              primary {
                headline
                subheadline
              }
            }
          }
        }
      }
    }
  }
`

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={allPagesQuery} variables={{ uid: query.slug }}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        // If there are no pages that match this slug throw a 404 error
        if (!data.allPages.edges.length) {
          return <Error statusCode={404} />
        }
        if (loading) return <div>Loading</div>
        let components = data.allPages.edges[0].node.body
        return <div>{components.map(component => getComponent(component))}</div>
      }}
    </Query>
  )
})
