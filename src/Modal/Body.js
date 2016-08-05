import React, { Component, PropTypes } from 'react'

import styles from './styles.css'
import View from '../core/View/'

export default class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    const { children } = this.props

    return (
      <View className={ styles.body }>
        { children }
      </View>
    )
  }
}
