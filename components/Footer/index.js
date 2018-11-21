import { Link } from '../../lib/routes'
import {
  Wrapper,
  Copyright,
  LogoLink,
  Logo,
  Social,
  SocialLink
} from './styles'
import { FaYoutube, FaTwitter, FaFacebook, FaSoundcloud } from 'react-icons/fa'
import { Container } from '../../lib/helpers'

export default () => {
  return (
    <Container>
      <Wrapper>
        <Link route="/" passHref>
          <LogoLink>
            <Logo src="/static/img/logo.svg" />
          </LogoLink>
        </Link>
        <Copyright>©2018 thinkfwd. All rights reserved.</Copyright>
        <Social>
          <Link route="/" passHref>
            <SocialLink>
              <FaYoutube size="20px" />
            </SocialLink>
          </Link>
          <Link route="/" passHref>
            <SocialLink>
              <FaTwitter size="20px" />
            </SocialLink>
          </Link>
          <Link route="/" passHref>
            <SocialLink>
              <FaFacebook size="20px" />
            </SocialLink>
          </Link>
          <Link route="/" passHref>
            <SocialLink>
              <FaSoundcloud size="20px" />
            </SocialLink>
          </Link>
        </Social>
      </Wrapper>
    </Container>
  )
}
