import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'

import styles from './styles.css'

const sizes = ['small', 'medium', 'large']

export default class Avatar extends Component {
  static propTypes = {
    alt: PropTypes.string,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(sizes),
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    status: PropTypes.oneOf([ 'default', 'present', 'away', 'active' ]).isRequired,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
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
      onError,
      onLoad,
      src,
      size,
      status,
      tabIndex,
      testId,
      type
    } = this.props

    const classes = [
      styles.avatar,
      styles[`status_${status}`],
      styles[`type_${type}`]
    ]

    const avatarStyles = {}

    if (sizes.includes(size)) {
      classes.push(styles[`size_${size}`])
    } else {
      avatarStyles.height = size
      avatarStyles.width = size
    }

    return (
      <View
        className={classNames(classes)}
        style={avatarStyles}
        tabIndex={tabIndex}
        testId={testId}
      >
        <img alt={alt} src={src} onError={onError} onLoad={onLoad} />
      </View>
    )
  }

}
