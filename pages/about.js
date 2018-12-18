import BigTextSmallText from '../components/BigTextSmallText'
import FullWidthImage from '../components/FullWidthImage'
import PersonGrid from '../components/PersonGrid'
import Layout from '../components/Layout'
export default () => {
  return (
    <Layout title={'thinkfwd | About'} description="About us">
      <BigTextSmallText />
      <FullWidthImage url="/static/img/audience.jpg" />
      <PersonGrid />
    </Layout>
  )
}
