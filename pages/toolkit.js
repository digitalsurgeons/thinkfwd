import { withRouter } from 'next/router'

export default withRouter(({ router: { query } }) => {
  return (
    <div>
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
    </div>
  )
})
