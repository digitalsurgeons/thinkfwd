import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Fade from 'react-reveal/Fade'
import { getComponent, throw404 } from '../lib/helpers'
import pageQuery from '../queries/page.graphql'
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
    data: { page }
  } = useQuery(pageQuery, {
    variables: { lang: 'en-us', uid: 'home' },
    notifyOnNetworkStatusChange: true
  })
  if (error) return <ErrorMessage message="Error loading page." />
  if (loading)
    return (
      <Layout>
        <Loader loading />
      </Layout>
    )
  if (!page) return throw404()

  const metaTitle = page.meta_title && page.meta_title[0].text
  const metaDescription = page.meta_description && page.meta_description[0].text

  return (
    <Layout
      title={metaTitle}
      description={metaDescription}
      url={`https://thinkfwd.co/${asPath}`}>
      <Fade>
        <div>
          {page.body && page.body.map(component => getComponent(component))}
        </div>
      </Fade>
    </Layout>
  )
}

export default withApollo(Page)
