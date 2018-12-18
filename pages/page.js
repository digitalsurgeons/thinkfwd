import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
import Layout from '../components/Layout'

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={pageQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { page } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading)
          return (
            <Layout>
              <Loader loading />
            </Layout>
          )
        if (!page) return throw404()
        return (
          <Layout
            title={page.meta_title && `thinkfwd | ${page.meta_title[0].text}`}
            description={
              page.meta_description && page.meta_description[0].text
            }>
            {page.body && page.body.map(component => getComponent(component))}
          </Layout>
        )
      }}
    </Query>
  )
})
