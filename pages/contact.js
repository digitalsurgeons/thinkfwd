import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import FullWidthImage from '../components/FullWidthImage'

export default () => {
  return (
    <>
      <Head>
        <title>thinkfwd | Contact</title>
      </Head>
      <ContactForm />
      <FullWidthImage url="/static/img/jamie-and-amy.jpg" />
    </>
  )
}
