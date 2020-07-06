import pascalCase from 'pascal-case'
import styled from '@emotion/styled'
import Error from 'next/error'
import { Router } from './routes'
import { breakpoints, gutter } from './settings'

export const linkResolver = doc => {
  // Pretty URLs for known types
  if (doc.type === 'toolkit') return `/toolkit/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  return `/`
}

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const Container = styled.div({
  maxWidth: `${breakpoints[3]}px`,
  margin: '0 auto',
  padding: '0 24px',
  [`@media (min-width: ${breakpoints[3] + gutter * 2}px)`]: {
    padding: 0
  }
})

export const getComponent = component => {
  const componentName = componentMap[component.fieldGroupName]
  try {
    const Component = require(`../components/${componentName}`).default
    return (
      <Component
        key={component.fieldGroupName}
        primary={component}
      />
    )
  } catch (e) {
    return <></>
  }
}

// Workaround for throwing 404 error in render method
// https://github.com/zeit/next.js/issues/4452
export const throw404 = () => {
  if (process.browser) {
    return <Error statusCode={404} />
  } else {
    const e = new Error()
    e.code = 'ENOENT'
    throw e
  }
}


const componentMap = {
"page_Pagecomponents_Components_Headings": "Headings",
"page_Pagecomponents_Components_Funkycta": "FunkyCta",
"page_Pagecomponents_Components_Funkyheadings": "FunkyHeadings",
"page_Pagecomponents_Components_Header": "Header",
"page_Pagecomponents_Components_Casestudygrid": "CaseStudyGrid",
"page_Pagecomponents_Components_Imagepanelcta": "ImagePanelCta",
"page_Pagecomponents_Components_Logowall": "LogoWall",
"page_Pagecomponents_Components_Stagger": "Stagger",
"page_Pagecomponents_Components_Contactform": "ContactForm",
"page_Pagecomponents_Components_Fullwidthimage": "FullWidthImage",
"page_Pagecomponents_Components_Persongrid": "PersonGrid",
"page_Pagecomponents_Components_Doubleimagecta": "DoubleImageCta",
"page_Pagecomponents_Components_Bigtextsmalltext": "BigTextSmallText",
"page_Pagecomponents_Components_Newslettersignup": "NewsletterSignup",
"page_Pagecomponents_Components_Toolkitgrid": "ToolkitGrid",
"page_Pagecomponents_Components_Eventsgrid": "EventsGrid",
"page_Pagecomponents_Components_Icontextrow": "IconTextRow"
}

