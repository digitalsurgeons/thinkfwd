import { Link } from '../../lib/routes'
import {
  Root,
  Row,
  Copyright,
  LogoLink,
  Logo,
  Social,
  SocialLink,
  LogosContainer,
  MadeIn,
  Logos
} from './styles'
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Container } from '../../lib/helpers'
import { css } from '@emotion/core'

export default () => {
  return (
    <Root>
      <Container>
        <Row>
          <Link route="/" passHref>
            <LogoLink>
              <Logo src="/static/img/logo.svg" />
            </LogoLink>
          </Link>

          <Social>
            {/* <Link route="https://youtube.com/think.fwd/" passHref>
              <SocialLink target="_blank" rel="noopener noreferrer">
                <FaYoutube size="20px" />
              </SocialLink>
            </Link> */}
            <Link route="https://twitter.com/thinkfwdco" passHref>
              <SocialLink target="_blank" rel="noopener noreferrer">
                <FaTwitter size="20px" />
              </SocialLink>
            </Link>
            <Link route="https://www.instagram.com/thinkfwdco/" passHref>
              <SocialLink target="_blank" rel="noopener noreferrer">
                <FaInstagram size="20px" />
              </SocialLink>
            </Link>
          </Social>
        </Row>
        <Row>
          <Copyright>
            ©{new Date().getFullYear()} thinkfwd. All rights reserved.
          </Copyright>
          <LogosContainer>
            <MadeIn>Made in CT</MadeIn>
            <Logos>
              <a
                href="https://digitalsurgeons.com"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  style={{ marginRight: 24 }}
                  src="/static/img/digitalsurgeons.svg"
                />
              </a>
              <a
                href="http://districtnhv.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/static/img/district.svg" />
              </a>
            </Logos>
          </LogosContainer>
        </Row>
      </Container>
    </Root>
  )
}
