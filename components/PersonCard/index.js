import { Image, Root, Wrapper, Text, Title, Subtitle, Bio } from './styles'

export default ({ children, title, subtitle, image, ...other }) => {
  return (
    <Root {...other}>
      {title && (
        <>
          <Image src={image} alt={title} />
          <Wrapper>
            <Text>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </Text>
          </Wrapper>
          <Bio>{children}</Bio>
        </>
      )}
    </Root>
  )
}
