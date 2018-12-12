import styled from '@emotion/styled'

export const Wrapper = styled.div({
  '.my-masonry-grid': {
    display: 'flex',
    marginLeft: -30,
    width: 'auto'
  },
  '.my-masonry-grid_column': {
    paddingLeft: 30,
    backgroundClip: 'padding-box',
    ':nth-of-type(2n)': {
      marginTop: 280
    }
  },
  '.my-masonry-grid_column > div': {
    marginBottom: 30
  }
})
