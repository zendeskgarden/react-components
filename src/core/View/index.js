import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

const hasAnyHandlers = (handlers) => (
  Object.keys(handlers).some((key) => handlers[key])
)

const View = ({
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
  testId,
  ...other
}) => {
  const keyDownHandlers = {
    '8': onDelete,
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

  const newProps = {
    ...other,
    ...eventHandlers
  }

  if (testId) {
    newProps['data-test-id'] = testId
  }

  if (hidden) {
    newProps['aria-hidden'] = true
  }

  return (
    <div
      { ...newProps }
      className={ classNames(styles.view, className) }
    >
      { children }
    </div>
  )
}

View.propTypes = {
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
  onSpace: PropTypes.func,
  testId: PropTypes.string,
  title: PropTypes.string
}

export default View
