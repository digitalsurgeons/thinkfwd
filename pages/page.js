import Head from 'next/head'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={pageQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { page } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <Loader loading />
        if (!page) return throw404()
        return (
          <>
            <Head>
              <title>
                {`thinkfwd | ${
                  page.meta_title ? page.meta_title[0].text : query.slug
                }`}
              </title>
              {page.meta_description && (
                <meta description={page.meta_description[0].text} />
              )}
            </Head>
            {page.body && page.body.map(component => getComponent(component))}
          </>
        )
      }}
    </Query>
  )
})
