import moment from 'moment'
import {
  Image,
  Root,
  Wrapper,
  Text,
  DateContainer,
  Month,
  Date,
  Title,
  Subtitle
} from './styles'

export default ({ title, subtitle, image, date }) => {
  return (
    <Root>
      <Image src={image} alt={title} />
      <Wrapper>
        {date && (
          <DateContainer>
            <Month>{moment(date, 'YYYY/MM/DD').format('MMM')}</Month>
            <Date>{moment(date, 'YYYY/MM/DD').format('DD')}</Date>
          </DateContainer>
        )}
        <Text>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Text>
      </Wrapper>
    </Root>
  )
}
