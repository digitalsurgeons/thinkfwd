import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Fade from 'react-reveal/Fade'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
import Layout from '../components/Layout'
import withApollo from '../lib/apollo'

const Page = withRouter(({ router: { asPath } }) => {
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
          <Layout
            title={metaTitle}
            description={metaDescription}
            url={`https://thinkfwd.co/${asPath}`}>
            <Fade>
              {page.body && page.body.map(component => getComponent(component))}
            </Fade>
          </Layout>
        )
      }}
    </Query>
  )
})

export default withApollo(Page)
