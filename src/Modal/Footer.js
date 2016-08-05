import React, { Component, PropTypes } from 'react'

import styles from './styles.css'

export default class Footer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <footer className={ styles.footer }>
        { children }
      </footer>
    )
  }
}
