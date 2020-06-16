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

const Page = () => {
  const router = useRouter()

  // Have to check if router exists until this issue is resolved
  // https://github.com/zeit/next.js/issues/6042
  if (!router) return null

  const { query, asPath } = router

  const {
    loading,
    error,
    data
  } = useQuery(toolkitQuery, {
    variables: { slug: query.slug },
    notifyOnNetworkStatusChange: true
  })
  const toolkit = data.toolkitBy

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
    toolkit:{
    description,
    image,
    aside,
    content,
    downloadLink,
    downloadlinktext
    }
  } = toolkit



  return (
    <Layout
      title={title}
      description={description}
      image={image}
      url={`https://thinkfwd.co/${asPath}`}>
      <Fade>
        <div>
          <Masthead image={image} title={title} description={description} />
          <ToolkitArticle
            aside={aside}
            main={content}
            downloadLink={downloadLink?.uri}
            downloadLinkText={downloadlinktext}
          />
        </div>
      </Fade>
    </Layout>
  )
}

export default Page
