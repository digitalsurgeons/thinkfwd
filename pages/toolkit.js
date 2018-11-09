import { withRouter } from 'next/router'

export default withRouter(({ router: { query } }) => {
  return <h1>{query.slug}</h1>
})
