import moment from 'moment'
import {
  Image,
  Root,
  Wrapper,
  Text,
  Description,
  DateContainer,
  ImageContainer,
  ImageTitle,
  Month,
  Date,
  Title,
  Subtitle
} from './styles'

export default ({
  opaque,
  title,
  imageTitle,
  subtitle,
  description,
  image,
  date,
  color
}) => {
  return (
    <Root>
      <ImageContainer>
        <Image opaque={opaque} src={image} alt={title} />
        {imageTitle && (
          <ImageTitle className="imageTitle">{imageTitle}</ImageTitle>
        )}
      </ImageContainer>
      <Wrapper opaque={opaque}>
        {date && (
          <DateContainer>
            <Month>{moment(date, 'YYYY/MM/DD').format('MMM')}</Month>
            <Date>{moment(date, 'YYYY/MM/DD').format('DD')}</Date>
          </DateContainer>
        )}
        <Text>
          {subtitle && <Subtitle style={{ color }}>{subtitle}</Subtitle>}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Wrapper>
    </Root>
  )
}
