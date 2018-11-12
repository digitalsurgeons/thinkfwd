import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from 'next/error'
import Router, { withRouter } from 'next/router'
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

export default withRouter(({ statusCode, router: { query } }) => {
  return (
    <Query query={allPagesQuery} variables={{ uid: query.slug }}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <div>Loading</div>
        if (data.allPages.edges.length === 0) {
          const e = new Error('Response not found')
          e.code = 'ENOENT' // Triggers a 404
          throw e
        }
        let components = data.allPages.edges[0].node.body
        return <div>{components.map(component => getComponent(component))}</div>
      }}
    </Query>
  )
})
