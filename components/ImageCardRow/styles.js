import styled from 'styled-components'

export const Wrapper = styled.div({
  '.my-masonry-grid': {
    display: 'flex',
    marginLeft: -30,
    width: 'auto'
  },
  '.my-masonry-grid_column': {
    paddingLeft: 30,
    backgroundClip: 'padding-box',
    ':nth-child(2n)': {
      marginTop: 280
    }
  },
  '.my-masonry-grid_column > div': {
    marginBottom: 30
  }
})
