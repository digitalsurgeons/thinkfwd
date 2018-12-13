import { Image, Root, Wrapper, Text, Title, Subtitle } from './styles'

export default ({ title, subtitle, image }) => {
  return (
    <Root>
      <Wrapper>
        <Text>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Text>
      </Wrapper>
      <Image src={image} alt={title} />
    </Root>
  )
}
