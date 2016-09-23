import React, { Component, PropTypes } from 'react'
import ThemeProvider from '../utils/theming/ThemeProvider'
import exampleTheme from '../themes/example-theme'

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
      default:
        return children
    }
    return
  }
}
