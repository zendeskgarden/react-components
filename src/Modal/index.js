import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'
import View from '../core/View/'

import Body from './Body'
import CloseButton from './CloseButton'
import Footer from './Footer'
import Header from './Header'
import Title from './Title'

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hidden: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['default', 'transparent', 'lightbox']),
    width: PropTypes.string
  }

  static defaultProps = {
    hidden: true,
    type: 'default'
  }

  static Body = Body
  static CloseButton = CloseButton
  static Footer = Footer
  static Header = Header
  static Title = Title

  render () {
    const {
      children,
      hidden,
      onClose,
      type,
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
      >
        <section
          autoFocus
          aria-labelledby='dialog-title'
          className={ styles.dialog }
          role='dialog'
          tabIndex='-1'
          onClick={ (e) => e.stopPropagation() }
          style={{ width }}
        >
          { children }
        </section>
      </View>
    )
  }
}
