import Navigation from '../Navigation'
import GlobalStyles from '../../styles'

export default ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      {children}
      <style jsx global>
        {`
          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-thin-webfont.woff2') format('woff2'),
              url('/static/fonts/gilroy-thin-webfont.woff') format('woff');
            font-weight: 100;
            font-style: normal;
          }

          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-light-webfont.woff2') format('woff2'),
              url('gilroy-light-webfont.woff') format('woff');
            font-weight: 200;
            font-style: normal;
          }

          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-medium-webfont.woff2')
                format('woff2'),
              url('/static/fonts/gilroy-medium-webfont.woff') format('woff');
            font-weight: 500;
            font-style: normal;
          }

          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-semibold-webfont.woff2')
                format('woff2'),
              url('/static/fonts/gilroy-semibold-webfont.woff') format('woff');
            font-weight: 600;
            font-style: normal;
          }

          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-semibolditalic-webfont.woff2')
                format('woff2'),
              url('/static/fonts/gilroy-semibolditalic-webfont.woff')
                format('woff');
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
            src: url('/static/fonts/gilroy-extrabold_3-webfont.woff2')
                format('woff2'),
              url('/static/fonts/gilroy-extrabold_3-webfont.woff')
                format('woff');
            font-weight: 800;
            font-style: normal;
          }

          @font-face {
            font-family: 'gilroy';
            src: url('/static/fonts/gilroy-blackitalic-webfont.woff2')
                format('woff2'),
              url('/static/fonts/gilroy-blackitalic-webfont.woff')
                format('woff');
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
        `}
      </style>
    </>
  )
}
