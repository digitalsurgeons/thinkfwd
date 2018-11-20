import { Link } from '../../routes'
import Card from '../Card'
import { Root, Wrapper, Heading, Box, StyledLink } from './styles'
import { Container } from '../../lib/helpers'

export default ({ data: { heading, card_one, card_two, card_three } }) => {
  return (
    <Root>
      <Container>
        <Heading>{heading[0].text}</Heading>
        <Wrapper>
          {card_one && (
            <Link route={`toolkits`} passHref>
              <StyledLink>
                <Card
                  title={card_one.title[0].text}
                  subtitle={card_one.description[0].text}
                  image={card_one.image.url}
                />
              </StyledLink>
            </Link>
          )}
          {card_two && (
            <Link route={`toolkits`} passHref>
              <StyledLink>
                <Card
                  title={card_two.title[0].text}
                  subtitle={card_two.description[0].text}
                  image={card_two.image.url}
                />
              </StyledLink>
            </Link>
          )}
          {card_three && (
            <Link route={`toolkits`} passHref>
              <StyledLink>
                <Card
                  title={card_three.title[0].text}
                  subtitle={card_three.description[0].text}
                  image={card_three.image.url}
                />
              </StyledLink>
            </Link>
          )}
        </Wrapper>
      </Container>
    </Root>
  )
}
