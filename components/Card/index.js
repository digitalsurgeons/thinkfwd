import { Image, Title } from './styles'

export default ({ title, description, image }) => {
  return (
    <>
      <Image src={image} />
      <Title>{title}</Title>
    </>
  )
}
