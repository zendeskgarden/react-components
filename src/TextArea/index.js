import React, { PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import Core from './Core'

import styles from './styles.css'

export default class TextArea extends ThemedComponent {
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

  constructor (props, context) {
    super(props, context, {
      namespace: 'TextArea',
      styles
    })

    this.state = {
      focused: false
    }

    this.keyboard = true
  }

  onBlur = (e) => {
    const { onBlur } = this.props

    this.setState({ focused: false })
    this.keyboard = true
    onBlur && onBlur(e)
  }

  onFocus = (e) => {
    const { onFocus } = this.props

    this.setState({ focused: this.keyboard })
    this.keyboard = true
    onFocus && onFocus(e)
  }

  onMouseDown = () => {
    this.keyboard = false
  }

  render () {
    const {
      className,
      resizable,
      ...other
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View
        className={ classNames(theme.txt, {
          [theme.focused]: !other.disabled && focused
        }) }
      >
        <Core
          { ...other }
          onBlur={ this.onBlur }
          onFocus={ this.onFocus }
          onMouseDown={ this.onMouseDown }
          className={ classNames(theme.input, {
            [theme.resizable]: resizable
          }, className) }
        />
      </View>
    )
  }
}
