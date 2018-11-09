import { Image, Title } from './styles'

export default ({ title, description, image }) => {
  return (
    <div>
      <Image src={image} />
      <Title>{title}</Title>
    </div>
  )
}
