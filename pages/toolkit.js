import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from 'next/error'
import { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import ToolkitArticle from '../components/ToolkitArticle'
import ToolkitMasthead from '../components/ToolkitMasthead'
import Loader from '../components/Loader'
import { throw404, getComponent } from '../lib/helpers'

const toolkitQuery = gql`
  query toolkit($lang: String!, $uid: String!) {
    toolkit(lang: $lang, uid: $uid) {
      title
      description
      image
      aside
      main
      body {
        ... on ToolkitBodyCall_to_action {
          type
          primary {
            heading
            link {
              ... on Page {
                _meta {
                  type
                  uid
                }
              }
            }
            link_text
          }
        }
      }
    }
  }
`

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={toolkitQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { toolkit } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <Loader loading />
        if (!toolkit) return throw404()
        const { title, description, image, aside, main, body } = toolkit
        return (
          <section>
            <ToolkitMasthead
              image={image}
              title={title}
              description={description}
            />
            <ToolkitArticle aside={aside} main={main} />
            {body && body.map(component => getComponent(component))}
          </section>
        )
      }}
    </Query>
  )
})
