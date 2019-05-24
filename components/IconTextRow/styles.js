import styled from '@emotion/styled'

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '50px',
  marginBottom: '70px'
})

const Box = styled.div({
  maxWidth: '200px'
})

const Title = styled.h3(props => ({
  color: props.color,
  fontSize: '24px',
  margin: '5px auto'
}))

const Copy = styled.p({
  lineHeight: '29px'
})

export { Row, Box, Title, Copy }
