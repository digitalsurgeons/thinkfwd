import React from 'react'
import pascalCase from 'pascal-case'

export default component => {
  const componentName = pascalCase(component.type)
  const Component = require(`../components/${componentName}`).default
  return <Component key={component.type} data={component.primary} />
}
