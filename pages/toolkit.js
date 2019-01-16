import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import Fade from 'react-reveal/Fade'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Masthead from '../components/Masthead'
import ToolkitArticle from '../components/ToolkitArticle'
import { getComponent, throw404 } from '../lib/helpers'
import toolkitQuery from '../queries/toolkit.graphql'
import Layout from '../components/Layout'
import withApollo from '../lib/apollo'

const Page = withRouter(({ router: { query } }) => {
  return (
    <Query query={toolkitQuery} variables={{ lang: 'en-us', uid: query.slug }}>
      {({ loading, error, data: { toolkit } }) => {
        if (error) return <ErrorMessage message="Error loading page." />
        if (loading)
          return (
            <Layout>
              <Loader loading />
            </Layout>
          )
        if (!toolkit) return throw404()

        const {
          title,
          description,
          image,
          aside,
          main,
          body,
          meta_title,
          meta_description,
          download_link,
          download_link_text
        } = toolkit

        const metaTitle = meta_title ? meta_title[0].text : title[0].text
        const metaDescription = meta_description
          ? meta_description[0].text
          : description[0].text

        return (
          <Layout title={metaTitle} description={metaDescription} image={image}>
            <Fade>
              <div>
                <Masthead
                  image={image}
                  title={title}
                  description={description}
                />
                <ToolkitArticle
                  aside={aside}
                  main={main}
                  downloadLink={download_link}
                  downloadLinkText={download_link_text}
                />
                {body && body.map(component => getComponent(component))}
              </div>
            </Fade>
          </Layout>
        )
      }}
    </Query>
  )
})

export default withApollo(Page)
