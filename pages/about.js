import Head from 'next/head'
import BigTextSmallText from '../components/BigTextSmallText'
import FullWidthImage from '../components/FullWidthImage'

export default () => {
  return (
    <>
      <Head>
        <title>thinkfwd | About</title>
      </Head>
      <BigTextSmallText />
      <FullWidthImage url="/static/img/audience.jpg" />
    </>
  )
}
