import styled from '@emotion/styled'

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between'
})

const Box = styled.div({
  maxWidth: '200px'
})

const Title = styled.h3(props => ({
  color: props.color,
  fontSize: '24px'
}))

export { Row, Box, Title }
