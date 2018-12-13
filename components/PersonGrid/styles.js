import styled from '@emotion/styled'

export const Wrapper = styled.div({
  padding: '100px 0 0',
  '.my-masonry-grid': {
    display: 'flex',
    marginLeft: -140,
    width: 'auto'
  },
  '.my-masonry-grid_column': {
    paddingLeft: 140,
    backgroundClip: 'padding-box',
    ':nth-of-type(odd)': {
      marginTop: 220
    }
  },
  '.my-masonry-grid_column > article': {
    marginBottom: 120
  }
})
