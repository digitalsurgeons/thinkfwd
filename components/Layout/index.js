import Head from "next/head";
import NextSeo from "next-seo";
import Navigation from "../Navigation";
import GlobalStyles from "../../lib/styles";
import { fonts } from "../../lib/settings";
import Footer from "../Footer";
import Menu from "../Menu";

export default ({ seo, children }) => {
  let config = {};
  if (seo) {
    const {
      metaDesc,
      title,
      opengraphUrl,
      opengraphDescription,
      opengraphImage,
    } = seo;

    config = {
      title: title,
      description: metaDesc,
      openGraph: {
        title: title,
        description: opengraphDescription,
        url: opengraphUrl ? opengraphUrl : "https://thinkfwd.co",
        // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
        images: [
          {
            url: opengraphImage
              ? opengraphImage.mediaItemUrl
              : "https://thinkfwd.co/static/img/logo.png",
            alt: opengraphImage?.altText ? opengraphImage.altText : "thinkfwd",
          },
        ],
      },
    };
  }
  return (
    <>
      <NextSeo config={config} />
      <GlobalStyles />
      <div id="outer-container">
        <Menu
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <main id="page-wrap">
          <Navigation />
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
