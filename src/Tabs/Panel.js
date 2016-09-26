import React, { PropTypes } from 'react'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'

import styles from './styles.css'

export default class Panel extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'Tabs',
      styles
    })
  }

  render () {
    const {
      children
    } = this.props

    const { theme } = this

    return (
      <View className={ theme.panel } role='tabpanel'>
        { children }
      </View>
    )
  }
}
