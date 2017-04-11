import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

// Will not treeshake yet :-(
// But you can use babel-plugin-transform-imports
// to transform these imports to individual import.
import {Button, Menu, Text} from '../../lib'

import './styles.css'

var root = document.createElement('div')
document.body.appendChild(root)

render(
  <div className='app'>
    <div className='header'>
      <Text className='title'>Zendesk Garden - React Components</Text>
    </div>
    <Menu
      trigger={<Button>Menu</Button>}
      onSelect={(value) => window.alert(value)}
    >
      <Menu.Item value='profile'>Profile</Menu.Item>
      <Menu.Item value='settings'>Settings</Menu.Item>
      <Menu.Item value='theme editor' disabled>Theme Editor</Menu.Item>
      <Menu.Separator />
      <Menu.Item value='article editor'>Article Editor</Menu.Item>
      <Menu.Item value='sign out'>Sign Out</Menu.Item>
    </Menu>
  </div>,
  root
)
