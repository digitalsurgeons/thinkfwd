import Head from 'next/head'
import Navigation from '../Navigation'
import GlobalStyles from '../../lib/styles'
import { fonts } from '../../lib/settings'
import Footer from '../Footer'
import Menu from '../Menu'

export default ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `thinkfwd | ${title[0].text}` : 'thinkfwd'}</title>
        {description && <meta description={description[0].text} />}
        <meta name="image" content="/static/img/social.jpg" />

        {/* Schema.org for Google */}
        <meta itemProp="name" content="thinkfwd" />
        <meta itemProp="description" content="thinkfwd" />
        <meta itemProp="image" content="/static/img/social.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="thinkfwd" />
        <meta name="twitter:description" content="thinkfwd" />
        <meta name="twitter:site" content="@thinkfwdco" />
        <meta
          name="twitter:image:src"
          content="https://thinkfwd.co/static/img/social.jpg"
        />

        {/* Open Graph general (Facebook, Pinterest) */}
        <meta name="og:title" content="thinkfwd" />
        <meta name="og:description" content="thinkfwd" />
        <meta
          name="og:image"
          content="https://thinkfwd.co/static/img/social.jpg"
        />
        <meta name="og:url" content="https://www.thinkfwd.co" />
        <meta name="og:type" content="website" />
      </Head>
      <GlobalStyles />
      <div id="outer-container">
        <Menu
          right
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <main id="page-wrap">
          <Navigation />
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
