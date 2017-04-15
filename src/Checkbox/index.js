import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import classNames from 'classnames'

import ThemedComponent from '../utils/theming/ThemedComponent'
import View from '../core/View'

import styles from './styles.css'

export default class Checkbox extends ThemedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    defaultChecked: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    muted: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {}
  }

  static defaultProps = {
    dir: 'ltr',
    muted: false
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

  onChange = (event) => {
    const { onChange } = this.props

    onChange && onChange(event.target.checked)
  }

  render () {
    const {
      checked,
      children,
      defaultChecked,
      disabled,
      dir,
      hint,
      muted,
      tabIndex,
      testId,
      title,
      tooltipPositioning
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View
        className={classNames(theme.checkbox, {
          [theme.focused]: focused,
          [theme.rtl]: dir === 'rtl',
          [theme.disabled]: disabled
        })}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        <input
          checked={checked}
          className={theme.input}
          data-test-id={testId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={this.id}
          onBlur={() => this.setState({ focused: false })}
          onChange={this.onChange}
          onFocus={() => {
            this.setState({ focused: this.keyboard })
            this.keyboard = true
          }}
          ref={ref => { this.input = ref }}
          tabIndex={tabIndex}
          type='checkbox'
        />
        <label
          className={classNames(theme.label, { [theme.muted]: muted })}
          dir={dir}
          htmlFor={this.id}
          onMouseUp={() => { this.keyboard = false }}
        >
          { children }
        </label>
        {hint && <small className={theme.hint}>{hint}</small>}
      </View>
    )
  }
}
