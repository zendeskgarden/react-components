import sinon from 'sinon'

import unexpectedReact from 'unexpected-react'
import 'react'

beforeEach(() => {
  sinon.stub(console, 'error')
})

afterEach(() => {
  unexpectedReact.clearAll()
  console.error.restore()
})
