import { withRouter } from 'next/router'
import Layout from '../components/Layout'

export default withRouter(({ router: { query } }) => {
  return (
    <Layout>
      <h1
        style={{
          textAlign: 'center',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
          fontSize: '40px'
        }}>
        {query.slug}
      </h1>
    </Layout>
  )
})
