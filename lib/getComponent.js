import React from 'react'
import pascalCase from 'pascal-case'

export default component => {
  const componentName = pascalCase(component.type)
  return React.createElement(
    require(`../components/${componentName}`).default,
    {
      key: component.type,
      data: component.primary
    }
  )
}
