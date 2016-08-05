import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import View from '../core/View'

import styles from './styles.css'

export default class Avatar extends Component {
  static propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]).isRequired,
    status: PropTypes.oneOf([ 'default', 'present', 'away', 'active' ]).isRequired,
    type: PropTypes.oneOf([ 'human', 'system' ]).isRequired
  }

  static defaultProps = {
    alt: '',
    size: 'medium',
    status: 'default',
    type: 'human'
  }

  render () {
    const {
      alt,
      src,
      size,
      status,
      type
    } = this.props

    const className = classnames(styles.avatar,
      styles[`size_${size}`],
      styles[`status_${status}`],
      styles[`type_${type}`]
    )

    return (
      <View
        className={ className }>
        <img alt={ alt } src={ src } />
      </View>
    )
  }

}
