import moment from 'moment'
import {
  Image,
  Root,
  Wrapper,
  Text,
  Description,
  DateContainer,
  Month,
  Date,
  Title,
  Subtitle
} from './styles'

export default ({ title, subtitle, description, image, date, color }) => {
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
          {subtitle && <Subtitle style={{ color }}>{subtitle}</Subtitle>}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Wrapper>
    </Root>
  )
}
