import React, { Component, PropTypes } from 'react'

export default class Core extends Component {
  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    className: PropTypes.string,
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
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    autoComplete: 'off',
    disabled: false,
    rows: 2,
    type: 'text',
    value: ''
  }

  render () {
    const {
      isFocused,
      onArrowDown,
      onArrowLeft,
      onArrowRight,
      onArrowUp,
      onChangeText,
      onDelete,
      onEnter,
      onEscape,
      onKeyDown,
      testId,
      ...other
    } = this.props

    const handlers = {
      '8': onDelete,
      '13': onEnter,
      '27': onEscape,
      '37': onArrowLeft,
      '38': onArrowUp,
      '39': onArrowRight,
      '40': onArrowDown
    }

    const props = {
      ...other,
      'data-test-id': testId,
      onChange (event) { onChangeText && onChangeText(event.target.value) },
      onKeyDown (event) {
        const handler = handlers[event.keyCode]
        handler && handler(event)
        onKeyDown && onKeyDown(event)
      },
      ref (input) {
        input && isFocused && input.focus()
      }
    }

    return <textarea { ...props }/>
  }
}
