import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Selectable from '../core/Selectable'

import styles from './styles.css'

class LinkItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.bool,
    testId: PropTypes.string,
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ])
  }

  static defaultProps = {
    disabled: false,
    role: 'menuitem',
    target: '_self'
  }

  render () {
    const {
      children,
      disabled,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      role,
      selected,
      testId,
      href,
      target
    } = this.props

    return (
      <a
        aria-activedescendant={selected}
        aria-disabled={disabled}
        className={
          classNames(styles.item, {
            [styles.disabled]: disabled,
            [styles.selected]: selected
          })
        }
        disabled={disabled}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role={role}
        data-test-id={testId}
        href={href}
        target={target}
      >
        {children}
      </a>
    )
  }
}

export default Selectable(LinkItem, {
  action: (props, event) => {
    const { href, target } = props
    const openInNewWindow = event.ctrlKey || event.metaKey

    const newWindow = window.open(href, openInNewWindow ? '_blank' : target)
    newWindow.opener = null
  },
  preventDefault: true
})
