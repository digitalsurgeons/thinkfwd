import styled from '@emotion/styled'
import { mq } from '../../lib/helpers'

const Root = styled.div({
  display: 'none',
  [mq[2]]: {
    display: 'block'
  }
})

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '60px',
  borderBottom: '2px solid rgba(0, 0, 0, .1)',
  paddingBottom: 60
})

const Box = styled.div({
  maxWidth: '200px'
})

const Title = styled.h3(props => ({
  color: props.color,
  fontSize: '24px',
  margin: '8px auto 16px',
  fontWeight: 500
}))

const Copy = styled.p({
  lineHeight: '29px'
})

export { Root, Row, Box, Title, Copy }
