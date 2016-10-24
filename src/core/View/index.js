import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const hasAnyHandlers = (handlers) => (
  Object.keys(handlers).some((key) => handlers[key])
)

export default class View extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    dir: PropTypes.oneOf([ 'ltr', 'rtl' ]),
    hidden: PropTypes.bool,
    onClick: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onKeyDown: PropTypes.func,
    onScroll: PropTypes.func,
    onSpace: PropTypes.func,
    onTab: PropTypes.func,
    testId: PropTypes.string,
    title: PropTypes.string
  }

  componentDidMount () {
    const { autoFocus } = this.props

    if (autoFocus) {
      this.element.focus()
    }
  }

  render () {
    const {
      children,
      className,
      hidden,
      onArrowDown,
      onArrowLeft,
      onArrowRight,
      onArrowUp,
      onDelete,
      onEnter,
      onEscape,
      onKeyDown,
      onSpace,
      onTab,
      testId,
      ...other
    } = this.props

    const keyDownHandlers = {
      '8': onDelete,
      '9': onTab,
      '13': onEnter,
      '27': onEscape,
      '32': onSpace,
      '37': onArrowLeft,
      '38': onArrowUp,
      '39': onArrowRight,
      '40': onArrowDown
    }

    const eventHandlers = {}

    if (onKeyDown || hasAnyHandlers(keyDownHandlers)) {
      eventHandlers.onKeyDown = (e) => {
        const handler = keyDownHandlers[e.keyCode]
        handler && handler(e)
        onKeyDown && onKeyDown(e)
      }
    }

    const props = {
      ...other,
      ...eventHandlers
    }

    if (testId) {
      props['data-test-id'] = testId
    }

    if (hidden) {
      props['aria-hidden'] = true
    }

    return (
      <div
        { ...props }
        className={ classNames(styles.view, className) }
        ref={ ref => this.element = ref }
      >
        { children }
      </div>
    )
  }
}
