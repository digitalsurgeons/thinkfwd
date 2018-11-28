import { withRouter } from 'next/router'
import { Container } from '../../lib/helpers'
import { Link } from '../../lib/routes'
import Button from '../Button'
import {
  ButtonContainer,
  LogoLink,
  Nav,
  NavLink,
  Root,
  Logo,
  Wrapper
} from './styles'
import { prefetch } from '../../lib/helpers'

export default withRouter(({ router, router: { asPath } }) => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Nav>
            <Link route="/education" passHref>
              <NavLink isActive={asPath.includes('education')}>
                Education
              </NavLink>
            </Link>
            <Link route="/toolkit" passHref>
              <NavLink
                onMouseOver={() => prefetch('/page?slug=toolkit')}
                isActive={asPath.includes('toolkit')}>
                Toolkit
              </NavLink>
            </Link>
            <Link route="/blog" passHref>
              <NavLink isActive={asPath.includes('blug')}>Blog</NavLink>
            </Link>
            <Link route="/about" passHref>
              <NavLink isActive={asPath.includes('about')}>About</NavLink>
            </Link>
          </Nav>
          <Link route="/">
            <LogoLink>
              <Logo src="/static/img/logo.svg" />
            </LogoLink>
          </Link>
          <ButtonContainer>
            <Button as="a" secondary>
              Get In Touch
            </Button>
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Root>
  )
})
