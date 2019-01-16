import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}
// Disable stories (not compatible with react hooks yet)
//configure(loadStories, module)
