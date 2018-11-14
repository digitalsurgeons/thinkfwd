import React from 'react'
import pascalCase from 'pascal-case'

export default component => {
  const componentName = pascalCase(component.type)
  const element = require(`../components/${componentName}`).default
  return React.createElement(element, {
    key: component.type,
    data: component.primary
  })
}
