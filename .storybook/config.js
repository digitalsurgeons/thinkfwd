import { configure } from '@storybook/react'

// // React hooks fix for storybook
// // https://github.com/storybooks/storybook/issues/4691#issuecomment-435569392
// setConfig({ pureSFC: true })

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
