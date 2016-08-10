import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'
import Core from './Core'

import styles from './styles.css'

export default class TextInput extends Component {
  static Core = Core

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
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
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off'
  }

  render () {
    const {
      className,
      ...other
    } = this.props

    return (
      <View className={ styles.txt }>
        <Core
          { ...other }
          className={ classNames(styles.input, className) }
        />
      </View>
    )
  }
}
