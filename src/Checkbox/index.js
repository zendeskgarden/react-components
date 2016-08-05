import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import View from '../core/View'

import styles from './styles.css'

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  }

  static defaultProps = {
    checked: false,
    dir: 'ltr'
  }

  constructor (props, context) {
    super(props, context)
    this.id = uuid.v4()
    this.keyboard = true
    this.state = {
      focused: false
    }
  }

  toggle = () => {
    const { checked, onChange } = this.props

    onChange && onChange(!checked)
  }

  render () {
    const {
      checked,
      children,
      disabled,
      dir,
      tabIndex,
      testId
    } = this.props

    const { focused } = this.state

    return (
      <View
        className={ classNames(styles.checkbox, {
          [styles.focused]: focused,
          [styles.rtl]: dir === 'rtl'
        }) }
      >
        <input
          checked={ checked }
          className={ styles.input }
          data-test-id={ testId }
          disabled={ disabled }
          id={ this.id }
          onBlur={ () => this.setState({ focused: false }) }
          onChange={ this.toggle }
          onFocus={ () => {
            this.setState({ focused: this.keyboard })
            this.keyboard = true
          } }
          tabIndex={ tabIndex }
          type='checkbox'
        />
        <label
          className={ styles.label }
          dir={ dir }
          htmlFor={ this.id }
          onMouseUp={ () => this.keyboard = false }
        >
          { children }
        </label>
      </View>
    )
  }
}
