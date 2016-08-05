import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <header>
        { children }
      </header>
    )
  }
}
