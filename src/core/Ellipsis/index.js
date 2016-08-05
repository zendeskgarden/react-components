import React, { Component, PropTypes } from 'react'

import View from '../View'
import styles from './styles.css'

export default class Ellipsis extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render () {
    const { children, title } = this.props

    const props = { className: styles.ellipsis }

    if ('title' in this.props) {
      props.title = title
    } else if (typeof children === 'string') {
      props.title = children
    }

    return (
      <View
        { ...props }
      >
        { children }
      </View>
    )
  }
}
