import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import styles from './styles.css'

import { Button } from 'zd-react-components'

var root = document.createElement('div')
document.body.appendChild(root)

render(
  <div className={ styles.app }>
    <Button onClick={() => window.alert('Hello world!')}>Hello</Button>
  </div>,
  root
)
