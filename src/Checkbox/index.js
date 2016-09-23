import React, { PropTypes } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import ThemedComponent from '../utils/theming/ThemedComponent'
import View from '../core/View'

import styles from './styles.css'

export default class Checkbox extends ThemedComponent {
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
    super(props, context, {
      namespace: 'Checkbox',
      styles
    })
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
    const { theme } = this

    return (
      <View
        className={ classNames(theme.checkbox, {
          [theme.focused]: focused,
          [theme.rtl]: dir === 'rtl'
        }) }
      >
        <input
          checked={ checked }
          className={ theme.input }
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
          className={ theme.label }
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
