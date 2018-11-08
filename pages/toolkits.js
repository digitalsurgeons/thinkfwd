import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from '../components/ErrorMessage'
import Header from '../components/Header'
import Toolkits from '../components/Toolkits'

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
        if (error) return <ErrorMessage message="Error loading toolkits." />
        if (loading) return <div>Loading</div>
        let components = data.allToolkits_pages.edges[0].node.body
        return (
          <section>
            {components.map(component => getComponent(component.type))}
          </section>
        )
      }}
    </Query>
  )
}

function getComponent(type) {
  switch (type) {
    case 'header':
      return <Header key={type} />
    case 'toolkits':
      return <Toolkits key={type} />
  }
}
