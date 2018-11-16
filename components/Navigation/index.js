import { Link } from '../../routes'
import {
  Root,
  Wrapper,
  LogoLink,
  Nav,
  NavLink,
  ButtonContainer
} from './styles'
import { Container } from '../../lib/helpers'
import Button from '../Button'

export default () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Nav>
            <Link route="/education" passHref>
              <NavLink>Education</NavLink>
            </Link>
            <Link route="/toolkits" passHref>
              <NavLink>Toolkits</NavLink>
            </Link>
            <Link route="/blog" passHref>
              <NavLink>Blog</NavLink>
            </Link>
            <Link route="/about" passHref>
              <NavLink>About</NavLink>
            </Link>
          </Nav>
          <Link route="/">
            <LogoLink>
              <img src="/static/img/logo.svg" />
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
}
