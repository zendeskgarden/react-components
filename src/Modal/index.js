import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'

import styles from './styles.css'
import View from '../core/View/'
import FocusJail from '../utils/FocusJail'

import Body from './Body'
import CloseButton from './CloseButton'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'

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
      this.tabJail = null
    }
  }

  onTab = (e) => {
    this.tabJail && this.tabJail.onTab(e)
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
          if (ref && !this.tabJail) {
            this.tabJail = new FocusJail(findDOMNode(ref).firstChild)
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
