import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import getComponent from '../lib/getComponent'

export const toolkitsPageQuery = gql`
  query {
    allToolkits_pages {
      edges {
        node {
          body {
            ... on Toolkits_pageBodyHeader {
              type
              primary {
                title
                headline
              }
            }
            ... on Toolkits_pageBodyToolkits {
              type
            }
          }
        }
      }
    }
  }
`

export default () => {
  return (
    <Query query={toolkitsPageQuery}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <div>Loading</div>
        let components = data.allToolkits_pages.edges[0].node.body
        return <div>{components.map(component => getComponent(component))}</div>
      }}
    </Query>
  )
}
