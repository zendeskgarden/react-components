import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import classNames from 'classnames'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import styles from './styles.css'

export default class RadioButton extends ThemedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    defaultChecked: PropTypes.bool,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    hint: PropTypes.node,
    muted: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {},
    value: PropTypes.any
  }

  static defaultProps = {
    dir: 'ltr'
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'RadioButton',
      styles
    })
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
      defaultChecked,
      dir,
      disabled,
      hint,
      muted,
      name,
      tabIndex,
      testId,
      title,
      tooltipPositioning
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View
        className={classNames(theme.checkbox, theme.radio, {
          [theme.focused]: focused,
          [theme.rtl]: dir === 'rtl'
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
          name={name}
          ref={ref => { this.input = ref }}
          onBlur={() => this.setState({ focused: false })}
          onChange={this.onChange}
          onFocus={() => {
            this.setState({ focused: this.keyboard })
            this.keyboard = true
          }}
          tabIndex={tabIndex}
          type='radio'
        />
        <label
          className={classNames(theme.label, {
            [theme.muted]: muted
          })}
          dir={dir}
          htmlFor={this.id}
          onMouseUp={() => { this.keyboard = false }}
        >
          { children }
        </label>
        { hint && <small className={styles.hint}>{hint}</small>}
      </View>
    )
  }
}
