import React, { Component, PropTypes } from 'react'

import View from '../core/View'

import styles from './styles.css'

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired
  }

  render () {
    const {
      children
    } = this.props

    return (
      <View className={ styles.panel } role='tabpanel'>
        { children }
      </View>
    )
  }
}
