import { Container } from '../../lib/helpers'
import { Card, CardWrapper, Description, Image, Title, Wrapper } from './styles'

export default ({ title, description, image }) => (
  <Container>
    <Wrapper>
      <Card>
        <CardWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardWrapper>
      </Card>
      <Image src={image.mediaItemUrl} alt={image.altText} />
    </Wrapper>
  </Container>
)
