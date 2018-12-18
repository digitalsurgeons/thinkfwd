import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import FullWidthImage from '../components/FullWidthImage'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout title="thinkfwd | Contact" description="Contact Us">
      <ContactForm />
      <FullWidthImage url="/static/img/jamie-and-amy.jpg" />
    </Layout>
  )
}
