import { createGlobalStyle } from 'styled-components'

export const settings = {
  screens: {
    desktop: '1215px'
  }
}

const fontfaces = `
  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-thin-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-thin-webfont.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('gilroy-light-webfont.woff2') format('woff2'),
      url('gilroy-light-webfont.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-medium-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-medium-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-semibold-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-semibold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }


  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-semibolditalic-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-semibolditalic-webfont.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-bold-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('gilroy-extrabold_3-webfont.woff2') format('woff2'),
      url('gilroy-extrabold_3-webfont.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-blackitalic-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-blackitalic-webfont.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'gilroy';
    src: url('/static/fonts/gilroy-black-webfont.woff2') format('woff2'),
      url('/static/fonts/gilroy-black-webfont.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`

const typography = `
  body {
    font-family: 'gilroy'
  }
  a {
    text-decoration: none
  }
`

const reset = `
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  }
`

export default createGlobalStyle`
  ${reset}
  ${fontfaces}
  ${typography}
`
