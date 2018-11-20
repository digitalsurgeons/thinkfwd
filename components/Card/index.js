import { Image, Root, Title } from './styles'

export default ({ title, description, image }) => {
  return (
    <Root>
      <Image src={image} />
      <Title>{title}</Title>
    </Root>
  )
}
