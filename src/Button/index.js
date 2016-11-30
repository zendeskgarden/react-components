import React, { PropTypes } from 'react'
import classNames from 'classnames'

import ThemedComponent from '../utils/theming/ThemedComponent'
import Core from './Core'

import styles from './styles.css'

export default class Button extends ThemedComponent {
  static Core = Core

  static propTypes = {
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['default', 'primary', 'basic']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    stretched: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
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
    super(props, context, {
      namespace: 'Button',
      styles
    })
    this.state = {
      focused: false
    }
  }

  onBlur = (e) => {
    const { onBlur } = this.props

    this.setState({ focused: false })
    onBlur && onBlur(e)
  }

  onKeyboardFocus = (e) => {
    this.setState({ focused: true })
  }

  render () {
    const {
      className,
      children,
      disabled,
      stretched,
      pill,
      size,
      type,
      ...other
    } = this.props
    const { focused } = this.state

    const { theme } = this

    const typeStyle = theme[`type_${type}`]
    return (
      <Core
        {...other}
        disabled={ disabled }
        onBlur={ this.onBlur }
        onKeyboardFocus={ this.onKeyboardFocus }
        className={
          classNames(theme[`size_${size}`], {
            [typeStyle]: typeStyle,
            [theme.focused]: focused,
            [theme.pill]: pill,
            [theme.stretched]: stretched,
            [theme.disabled]: disabled
          }, className)
        }
      >
        { children }
      </Core>
    )
  }
}
