import 'babel-polyfill'

import unexpectedReact from 'unexpected-react'
import 'react'

afterEach(() => {
  unexpectedReact.clearAll()
})

const runTestsContext = (testsContext) => {
  testsContext.keys().forEach(testsContext)
}

runTestsContext(require.context('../src', true, /[.\/]spec$/))
