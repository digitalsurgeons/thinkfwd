import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import Fade from 'react-reveal/Fade'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Masthead from '../components/Masthead'
import ToolkitArticle from '../components/ToolkitArticle'
import { getComponent, throw404 } from '../lib/helpers'
import toolkitQuery from '../queries/toolkit.graphql'
import Layout from '../components/Layout'
import withApollo from '../lib/apollo'

const Page = () => {
  const router = useRouter()

  // Have to check if router exists until this issue is resolved
  // https://github.com/zeit/next.js/issues/6042
  if (!router) return null

  const { query, asPath } = router

  const {
    loading,
    error,
    data: { toolkit }
  } = useQuery(toolkitQuery, {
    variables: { lang: 'en-us', uid: query.slug },
    notifyOnNetworkStatusChange: true
  })
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
    <Layout
      title={metaTitle}
      description={metaDescription}
      image={image}
      url={`https://thinkfwd.co/${asPath}`}>
      <Fade>
        <div>
          <Masthead image={image} title={title} description={description} />
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
}

export default withApollo(Page)
