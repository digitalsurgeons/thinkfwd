import { Query } from 'react-apollo'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
import Layout from '../components/Layout'
import withApollo from '../lib/apollo'

const Page = () => {
  return (
    <Query query={pageQuery} variables={{ lang: 'en-us', uid: 'home' }}>
      {({ loading, error, data: { page } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading)
          return (
            <Layout>
              <Loader loading />
            </Layout>
          )
        if (!page) return throw404()

        const metaTitle = page.meta_title && page.meta_title[0].text
        const metaDescription =
          page.meta_description && page.meta_description[0].text

        return (
          <Layout title={metaTitle} description={metaDescription}>
            {page.body && page.body.map(component => getComponent(component))}
          </Layout>
        )
      }}
    </Query>
  )
}

export default withApollo(Page)
