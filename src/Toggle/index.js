import React, { PropTypes } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import ThemedComponent from '../utils/theming/ThemedComponent'
import View from '../core/View'

import styles from './styles.css'

export default class Toggle extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
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
      namespace: 'Toggle',
      styles
    })

    this.id = uuid.v4()

    this.handlers = {
      '13': this.toggle,
      '37': this.onArrowLeft,
      '39': this.onArrowRight
    }

    this.state = {
      focused: false
    }
  }

  toggle = () => {
    const { checked, onChange } = this.props

    onChange && onChange(!checked)
  }

  onArrowLeft = () => {
    const { checked, onChange } = this.props

    if (checked) {
      onChange && onChange(false)
    }
  }

  onArrowRight = () => {
    const { checked, onChange } = this.props

    if (!checked) {
      onChange && onChange(true)
    }
  }

  render () {
    const {
      children,
      checked,
      dir,
      disabled,
      tabIndex,
      testId
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View
        className={ classNames(theme.toggle, {
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
          onKeyDown={ (event) => {
            const handler = this.handlers[event.keyCode]
            handler && handler()
          } }
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
