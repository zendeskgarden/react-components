import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { Button, Text } from 'zd-react-components'
import './styles.css'

var root = document.createElement('div')
document.body.appendChild(root)

render(
  <div className='app'>
    <div className='header'>
      <Text className='title'>Zendesk Garden - React Components</Text>
    </div>
    <Button onClick={() => window.alert('Hello world!')}>Hello</Button>
  </div>,
  root
)
