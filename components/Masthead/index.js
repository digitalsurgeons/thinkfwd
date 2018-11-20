import { Container } from '../../lib/helpers'
import { Card, CardWrapper, Description, Image, Title, Wrapper } from './styles'

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
