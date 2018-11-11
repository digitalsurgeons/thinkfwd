import Header from '../components/Header'
import Toolkits from '../components/Toolkits'
import NewsletterSignup from '../components/NewsletterSignup'

export default component => {
  switch (component.type) {
    case 'header':
      return (
        <Header
          title={component.primary.title[0].text}
          headline={component.primary.headline[0].text}
          key={component.type}
        />
      )
    case 'toolkits':
      return <Toolkits key={component.type} />
    case 'newsletter_signup':
      return (
        <NewsletterSignup
          headline={component.primary.headline[0].text}
          subheadline={component.primary.subheadline[0].text}
          key={component.type}
        />
      )
  }
}
