import Navigation from '../Navigation'
import GlobalStyles from '../../lib/styles'
import { fonts } from '../../lib/settings'
import Footer from '../Footer'

export default ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
