import { Wrapper, Card, CardWrapper, Title, Description, Image } from './styles'
import { Container } from '../../lib/helpers'

export default ({ title, description, image }) => (
  <Container>
    <Wrapper>
      <Card>
        <CardWrapper>
          <Title>{title[0].text}</Title>
          <Description>{description[0].text}</Description>
        </CardWrapper>
      </Card>
      <Image src={image.url} alt={image.alt} />
    </Wrapper>
  </Container>
)
