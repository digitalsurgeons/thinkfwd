import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Fade from 'react-reveal/Fade'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
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
  } = useQuery(pageQuery, {
    variables: { uri: query.slug },
    notifyOnNetworkStatusChange: true
  })
  const page = data?.pageBy
  // console.log("Page", page.seo)

  if (error) return <ErrorMessage message="Error loading page." />
  if (loading)
    return (
      <Layout >
        <Loader loading />
      </Layout>
    )
  if (!page) return throw404()

  return (
    <Layout
      seo={page?.seo}
      url={`https://thinkfwd.co/${asPath}`}>
      <Fade>
        <div>
          { page.pageComponents?.components.map(component => getComponent(component))}
        </div>
      </Fade>
    </Layout>
  )
}

export default Page
