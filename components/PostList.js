import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

export const allPostsQuery = gql`
  query allSlices {
    allAbouts {
      edges {
        node {
          body {
            ... on AboutBodyHeader {
              label
              primary {
                title
                subtitle
              }
            }
          }
        }
      }
    }
  }
`

export default () => {
  return (
    <Query query={allPostsQuery}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message="Error loading posts." />
        if (loading) return <div>Loading</div>
        console.log(data)
        return <section>hi</section>
      }}
    </Query>
  )
}
