import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Core from './Core'
import styles from './styles.css'

export default class TextInput extends Component {
  static Core = Core

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    name: PropTypes.string,
    maxLength: PropTypes.number,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium']),
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    type: PropTypes.oneOf(['default', 'basic']),
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off',
    size: 'medium',
    type: 'default'
  }

  render () {
    const {
      type,
      size,
      ...other
    } = this.props

    return (
      <Core
        { ...other }
        className={ classNames(styles.input, styles[`size_${size}`], styles[`type_${type}`]) }
      />
    )
  }
}
