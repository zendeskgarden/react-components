import React, { PropTypes } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import Core from './Core'

import styles from './styles.css'

export default class TextInput extends ThemedComponent {
  static Core = Core

  static propTypes = {
    autoComplete: PropTypes.oneOf(['on', 'off']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool.isRequired,
    hint: PropTypes.node,
    label: PropTypes.node,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onArrowDown: PropTypes.func,
    onArrowLeft: PropTypes.func,
    onArrowRight: PropTypes.func,
    onArrowUp: PropTypes.func,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onDelete: PropTypes.func,
    onEnter: PropTypes.func,
    onEscape: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {},
    /** Use `valueType` instead */
    type: (props, propName, componentName) => {
      if (propName in props) {
        return new Error('The TextInput does not accept a type prop use valueType instead')
      }
    },
    value: PropTypes.string,
    valueType: PropTypes.oneOf([
      'email',
      'number',
      'password',
      'search',
      'tel',
      'text'
    ])
  }

  static defaultProps = {
    autoComplete: 'off',
    disabled: false,
    valueType: 'text'
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'TextInput',
      styles
    })

    this.generatedId = uuid.v4()
  }

  getId = () => (
    this.props.id || this.generatedId
  )

  renderLabel = () => {
    const { label } = this.props
    const { theme } = this

    if (!label) {
      return null
    }

    return (
      <label
        className={theme.label}
        htmlFor={this.getId()}
      >
        { label }
      </label>
    )
  }

  render () {
    const {
      className,
      hint,
      title,
      tooltipPositioning,
      valueType,
      ...other
    } = this.props

    const { theme } = this

    return (
      <View
        className={theme.txt}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        {this.renderLabel()}
        <Core
          {...other}
          valueType={valueType}
          id={this.getId()}
          className={classNames(theme.input, className)}
          ref={ref => {
            if (ref && ref.input) {
              this.input = ref.input
            }
          }}
        />
        {hint && <small className={theme.hint}>{hint}</small>}
      </View>
    )
  }
}
