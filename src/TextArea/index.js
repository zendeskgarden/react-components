import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'
import Core from './Core'

import styles from './styles.css'

export default class TextArea extends Component {
  static Core = Core

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool.isRequired,
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
    resizable: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off',
    disabled: false,
    resizable: false,
    type: 'default'
  }

  render () {
    const {
      className,
      resizable,
      ...other
    } = this.props

    return (
      <View className={ styles.txt }>
        <Core
          { ...other }
          className={ classNames(styles.input, {
            [styles.resizable]: resizable
          }, className) }
        />
      </View>
    )
  }
}
