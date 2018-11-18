import Navigation from '../Navigation'
import GlobalStyles from '../../styles'
import { fonts } from '../../lib/settings'

export default ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      {children}
    </>
  )
}
