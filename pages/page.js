import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Head from 'next/head'
import Error from 'next/error'
import { withRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import { throw404 } from '../lib/helpers'
import getComponent from '../lib/getComponent'
import Loader from '../components/Loader'

const pageQuery = gql`
  query page($lang: String!, $uid: String!) {
    page(lang: $lang, uid: $uid) {
      body {
        ... on PageBodyHeader {
          type
          primary {
            title
            headline
          }
        }
        ... on PageBodyToolkits {
          type
        }
        ... on PageBodyNewsletter_signup {
          type
          primary {
            headline
            subheadline
          }
        }
        ... on PageBodyStagger {
          type
          primary {
            image
            headline
            description
            link {
              ... on _ExternalLink {
                url
              }
              ... on _ImageLink {
                url
              }
              ... on _FileLink {
                url
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
