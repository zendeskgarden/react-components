import React, { Component, PropTypes } from 'react'

import styles from './styles.css'

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <h1 className={ styles.header }>
        { children }
      </h1>
    )
  }
}
