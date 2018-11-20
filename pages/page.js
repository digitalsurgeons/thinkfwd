import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Head from 'next/head'
import Error from 'next/error'
import { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import { throw404, getComponent } from '../lib/helpers'
import Loader from '../components/Loader'
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
              <title>{query.slug}</title>
            </Head>
            {page.body.map(component => getComponent(component))}
          </>
        )
      }}
    </Query>
  )
})
