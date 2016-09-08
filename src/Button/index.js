import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'

import styles from './styles.css'

export default class Button extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['default', 'primary', 'basic']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    stretched: PropTypes.bool,
    onClick: PropTypes.func,
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
    this.state = {
      focused: false
    }
  }

  onKeyboardClick = (e) => {
    const { onClick } = this.props
    onClick && onClick(e)
    e.preventDefault()
  }

  render () {
    const {
      autoFocus,
      className,
      children,
      disabled,
      stretched,
      onClick,
      pill,
      size,
      tabIndex,
      testId,
      title,
      type
    } = this.props

    const { focused } = this.state

    return (
      <View
        autoFocus={ autoFocus }
        className={
          classNames(styles[`size_${size}`], {
            [styles[`type_${type}`]]: !disabled,
            [styles.focused]: focused,
            [styles.pill]: pill,
            [styles.stretched]: stretched,
            [styles.disabled]: disabled
          }, className)
        }
        testId={ testId }
        disabled={ disabled }
        onBlur={ () => this.setState({ focused: false }) }
        onClick={ onClick }
        onEnter={ this.onKeyboardClick }
        onFocus={ () => {
          this.setState({ focused: this.keyboard })
          this.keyboard = true
        } }
        onMouseDown={ () => this.keyboard = false }
        onSpace={ this.onKeyboardClick }
        tabIndex={ tabIndex }
        role='button'
        title={ title }
      >
        { children }
      </View>
    )
  }
}
