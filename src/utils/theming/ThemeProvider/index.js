import React, { Component, PropTypes } from 'react'

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object.isRequired
  }

  static childContextTypes = {
    rcTheme: PropTypes.object.isRequired
  }

  getChildContext () {
    const { theme } = this.props
    return { rcTheme: theme }
  }

  render () {
    const { children } = this.props

    return (
      <div>
        { children }
      </div>
    )
  }
}
