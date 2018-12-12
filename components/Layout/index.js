import Navigation from '../Navigation'
import GlobalStyles from '../../lib/styles'
import { fonts } from '../../lib/settings'
import Footer from '../Footer'
import Menu from '../Menu'

export default ({ children }) => {
  return (
    <>
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
