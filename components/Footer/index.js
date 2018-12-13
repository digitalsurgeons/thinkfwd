import { Link } from '../../lib/routes'
import {
  Row,
  Copyright,
  LogoLink,
  Logo,
  Social,
  SocialLink,
  MadeIn,
  Logos
} from './styles'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Container } from '../../lib/helpers'

export default () => {
  return (
    <Container>
      <Row>
        <Link route="/" passHref>
          <LogoLink>
            <Logo src="/static/img/logo.svg" />
          </LogoLink>
        </Link>

        <Social>
          <Link route="https://youtube.com/digitalsurgeons" passHref>
            <SocialLink target="_blank" rel="noopener noreferrer">
              <FaYoutube size="20px" />
            </SocialLink>
          </Link>
          <Link route="https://twitter.com/digitalsurgeons" passHref>
            <SocialLink target="_blank" rel="noopener noreferrer">
              <FaTwitter size="20px" />
            </SocialLink>
          </Link>
          <Link route="https://instagram.com/digitalsurgeons" passHref>
            <SocialLink>
              <FaInstagram size="20px" />
            </SocialLink>
          </Link>
        </Social>
      </Row>
      <Row>
        <Copyright>©2018 thinkfwd. All rights reserved.</Copyright>
        <Logos>
          <MadeIn>Made in CT</MadeIn>
          <img
            style={{ marginRight: 24 }}
            src="/static/img/digitalsurgeons.svg"
          />
          <img src="/static/img/district.svg" />
        </Logos>
      </Row>
    </Container>
  )
}
