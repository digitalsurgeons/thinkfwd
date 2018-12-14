import { Query } from 'react-apollo'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
import Layout from '../components/Layout'

export default () => {
  return (
    <Query query={pageQuery} variables={{ lang: 'en-us', uid: 'home' }}>
      {({ loading, error, data: { page } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <Loader loading />
        if (!page) return throw404()
        return (
          <Layout title={page.meta_title} description={page.meta_description}>
            {page.body && page.body.map(component => getComponent(component))}
          </Layout>
        )
      }}
    </Query>
  )
}
