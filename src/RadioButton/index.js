import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import View from '../core/View'
import styles from './styles.css'

export default class RadioButton extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    value: PropTypes.any
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

  onChange = () => {
    const { value, onChange } = this.props

    onChange && onChange(value)
  }

  render () {
    const {
      checked,
      children,
      dir,
      disabled,
      name,
      tabIndex,
      testId
    } = this.props

    const { focused } = this.state

    return (
      <View
        className={ classNames(styles.checkbox, styles.radio, {
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
          name={ name }
          onBlur={ () => this.setState({ focused: false }) }
          onChange={ this.onChange }
          onFocus={ () => {
            this.setState({ focused: this.keyboard })
            this.keyboard = true
          } }
          tabIndex={ tabIndex }
          type='radio'
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
