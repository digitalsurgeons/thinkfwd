import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
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
                src: url('/static/fonts/gilroy-extrabold_3-webfont.woff2') format('woff2'),
                  url('/static/fonts/gilroy-extrabold_3-webfont.woff') format('woff');
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
              }`
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function (d, t) {
                var bh = d.createElement(t), s = d.getElementsByTagName(t)[0];
                bh.type = 'text/javascript';
                bh.src = 'https://www.bugherd.com/sidebarv2.js?apikey=fnnus4mreaq2s5ia2sx42q';
                s.parentNode.insertBefore(bh, s);
                })(document, 'script');`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-562C4XW');`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.prismic = {
    endpoint: 'https://thinkfwd.cdn.prismic.io/api/v2'
  };`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.prismic = { endpoint: 'https://thinkfwd.cdn.prismic.io/api/v2' };`
            }}
          />

          <script
            type="text/javascript"
            src="https://static.cdn.prismic.io/prismic.min.js"
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-562C4XW"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
