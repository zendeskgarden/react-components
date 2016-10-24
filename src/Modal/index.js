import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'

import styles from './styles.css'
import View from '../core/View/'

import Body from './Body'
import CloseButton from './CloseButton'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'

import tabbable from 'tabbable'

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.oneOf([
      'ltr',
      'rtl'
    ]),
    hidden: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['default', 'transparent', 'lightbox']),
    testId: PropTypes.string,
    width: PropTypes.string
  }

  static defaultProps = {
    dir: 'ltr',
    hidden: true,
    type: 'default'
  }

  static Body = Body
  static CloseButton = CloseButton
  static Footer = Footer
  static Header = Header
  static Title = Title

  componentDidUpdate (prevProps) {
    const { hidden } = this.props
    const { hidden: prevHidden } = prevProps

    if (!hidden && prevHidden) {
      document.querySelector('html').style.overflow = 'hidden'
    } else if (hidden && !prevHidden) {
      document.querySelector('html').style.overflow = ''
    }
  }

  onTab = (e) => {
    const elements = tabbable(this.modalElement)

    const index = elements.indexOf(e.target)

    if (elements.length === 0) {
      setTimeout(() => {
        this.dialogElement.focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    } else if (index < 1 && e.shiftKey) {
      // Shift tab on the first tabbable element or the dialog
      setTimeout(() => {
        elements[elements.length - 1].focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    } else if (index === elements.length - 1 && !e.shiftKey) {
      // Tab on the last tabbable element
      setTimeout(() => {
        elements[0].focus()
      }, 0)
      e.stopPropagation()
      e.preventDefault()
    }
  }

  render () {
    const {
      children,
      dir,
      hidden,
      onClose,
      type,
      testId,
      width
    } = this.props

    if (hidden) {
      return null
    }

    return (
      <View
        className={ classNames(styles.backdrop, styles[`type_${type}`]) }
        onClick={ onClose }
        onEscape={ onClose }
        onTab={ this.onTab }
        ref={ ref => {
          if (ref) {
            this.modalElement = this.modalElement || findDOMNode(ref)
            this.dialogElement = this.modalElement.firstChild

            setTimeout(() => {
              if (!this.dialogElement.contains(window.document.activeElement)) {
                this.dialogElement.focus()
              }
            }, 1)
          }
        } }
      >
        <View
          aria-labelledby='dialog-title'
          className={ classNames(
            styles.dialog,
            styles[dir], {
              [styles.open]: !hidden
            }
          ) }
          onClick={ (e) => e.stopPropagation() }
          role='dialog'
          style={{ width }}
          tabIndex={ -1 }
          testId={ testId }
        >
          { children }
        </View>
      </View>
    )
  }
}
