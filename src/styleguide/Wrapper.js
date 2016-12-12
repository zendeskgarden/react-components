import React, { Component, PropTypes } from 'react'
import ThemeProvider from '../utils/theming/ThemeProvider'
import exampleTheme from '../themes/example-theme'
import electroidDarkTheme from '../themes/electroid-dark-theme'

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const {
      children
    } = this.props

    const theme = window.localStorage.getItem('rc-theme') || 'default'

    switch (theme) {
      case 'example':
        return (
            <ThemeProvider theme={ exampleTheme }>
              { children }
            </ThemeProvider>
        )
      case 'electroid-dark':
        return (
          <div className='u-bg-daintree u-fg-white' style={{ padding: '15px', margin: '-15px' }}>
            <ThemeProvider theme={ electroidDarkTheme }>
              { children }
            </ThemeProvider>
          </div>
        )
      default:
        return children
    }
    return
  }
}
