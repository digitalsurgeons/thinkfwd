import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ErrorMessage from '../components/ErrorMessage'
import Head from 'next/head'
import Loader from '../components/Loader'
import Masthead from '../components/Masthead'
import ToolkitArticle from '../components/ToolkitArticle'
import { getComponent, throw404 } from '../lib/helpers'
import toolkitQuery from '../queries/toolkit.graphql'

export default withRouter(({ router: { query } }) => {
  return (
    <Query query={toolkitQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { toolkit } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading) return <Loader loading />
        if (!toolkit) return throw404()
        const { title, description, image, aside, main, body } = toolkit
        return (
          <>
            <Head>
              <title>{toolkit.meta_title[0].text}</title>
            </Head>
            <Masthead image={image} title={title} description={description} />
            <ToolkitArticle aside={aside} main={main} />
            {body && body.map(component => getComponent(component))}
          </>
        )
      }}
    </Query>
  )
})
