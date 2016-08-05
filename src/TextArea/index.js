import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Core from './Core'
import styles from './styles.css'

export default class TextArea extends Component {
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
    resizable: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    type: PropTypes.oneOf(['default', 'basic']),
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off',
    resizable: false,
    type: 'default'
  }

  render () {
    const {
      type,
      resizable,
      ...other
    } = this.props

    return (
      <Core
        { ...other }
        className={ classNames(styles.input, styles[`type_${type}`], {
          [styles.resizable]: resizable
        }) }
      />
    )
  }
}
