import Head from 'next/head'
import BigTextSmallText from '../components/BigTextSmallText'
import FullWidthImage from '../components/FullWidthImage'
import PersonGrid from '../components/PersonGrid'

export default () => {
  return (
    <>
      <Head>
        <title>thinkfwd | About</title>
      </Head>
      <BigTextSmallText />
      <FullWidthImage url="/static/img/audience.jpg" />
      <PersonGrid />
    </>
  )
}
