import React, { Component, PropTypes } from 'react'

import View from '../core/View'

export default class Core extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['default', 'primary', 'basic']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    stretched: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyboardFocus: PropTypes.func,
    pill: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    tabIndex: 0,
    type: 'default',
    size: 'small'
  }

  constructor (props, context) {
    super(props, context)
    this.keyboard = true
  }

  onKeyboardClick = (e) => {
    const { onClick } = this.props
    onClick && onClick(e)
    e.preventDefault()
  }

  onMouseDown = (e) => {
    const { disabled } = this.props

    if (disabled) {
      e.stopPropagation()
      e.preventDefault()
    } else {
      this.keyboard = false
    }
  }

  onClick = (e) => {
    const { disabled, onClick } = this.props

    if (disabled) {
      e.stopPropagation()
      e.preventDefault()
    } else {
      onClick && onClick(e)
    }
  }

  onFocus = (e) => {
    const { onFocus, onKeyboardFocus } = this.props

    onFocus && onFocus(e)
    this.keyboard && onKeyboardFocus && onKeyboardFocus(e)

    this.keyboard = true
  }

  render () {
    const {
      autoFocus,
      className,
      children,
      disabled,
      onBlur,
      tabIndex,
      testId,
      title
    } = this.props

    return (
      <View
        autoFocus={ autoFocus }
        className={ className }
        testId={ testId }
        disabled={ disabled }
        onBlur={ onBlur }
        onClick={ this.onClick }
        onEnter={ this.onKeyboardClick }
        onFocus={ this.onFocus }
        onMouseDown={ this.onMouseDown }
        onSpace={ this.onKeyboardClick }
        tabIndex={ disabled ? -1 : tabIndex }
        role='button'
        title={ title }
      >
        { children }
      </View>
    )
  }
}
