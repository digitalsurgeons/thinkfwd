import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from 'next/error'
import Router, { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import ToolkitArticle from '../components/ToolkitArticle'
import { throw404 } from '../lib/helpers'

const toolkitQuery = gql`
  query toolkit($lang: String!, $uid: String!) {
    toolkit(lang: $lang, uid: $uid) {
      title
      description
      image
      aside
      main
    }
  }
`

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={toolkitQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { toolkit } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <div>Loading</div>
        if (!toolkit) return throw404()
        const { title, description, image, aside, main } = toolkit
        return (
          <section>
            <ToolkitArticle aside={aside} main={main} />
          </section>
        )
      }}
    </Query>
  )
})
