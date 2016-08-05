import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Text from '../core/Text'

import styles from './styles.css'

export default class Button extends Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'primary', 'danger', 'basic']),
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

  render () {
    const {
      autoFocus,
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
    const className = classNames(styles[`size_${size}`], {
      [styles[`type_${type}`]]: !disabled,
      [styles.focused]: focused,
      [styles.pill]: pill,
      [styles.stretched]: stretched,
      [styles.disabled]: disabled
    })

    return (
      <button
        autoFocus={ autoFocus }
        className={ className }
        data-test-id={ testId }
        disabled={ disabled }
        onClick={ onClick }
        onBlur={ () => this.setState({ focused: false }) }
        onFocus={ () => {
          this.setState({ focused: this.keyboard })
          this.keyboard = true
        } }
        onMouseDown={ () => this.keyboard = false }
        tabIndex={ tabIndex }
        title={ title }
        type='button'
      >
        <Text>
        { children }
        </Text>
      </button>
    )
  }
}
