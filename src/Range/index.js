import React, { PropTypes } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import styles from './styles.css'

export default class Range extends ThemedComponent {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    testId: PropTypes.string,
    tabIndex: PropTypes.number,
    title: PropTypes.string
  }

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'Range',
      styles
    })
    this.generatedId = uuid.v4()
    this.state = {
      focused: false,
      bgWidth: 0
    }
  }

  componentDidMount () {
    this.setState({
      bgWidth: this.getBgWidth()
    })
  }

  getId = () => (
    this.props.id || this.generatedId
  )

  onChange = (e) => {
    const { onChange } = this.props

    onChange && onChange(parseFloat(e.target.value))

    this.setState({ bgWidth: this.getBgWidth() })
  }

  getBgWidth () {
    let { max, min } = this.props
    const { value } = this.input

    if (parseFloat(max) < parseFloat(min)) {
      max = 100
    }

    return 100 * (value - min) / (max - min)
  }

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
      defaultValue,
      disabled,
      max,
      min,
      step,
      tabIndex,
      testId,
      title,
      value
    } = this.props

    const { focused, bgWidth } = this.state
    const { theme } = this

    return (
      <View className={classNames(theme.range, {
        [theme.focused]: focused
      })}>
        { this.renderLabel() }
        <input
          className={theme.input}
          data-test-id={testId}
          defaultValue={defaultValue}
          disabled={disabled}
          id={this.getId()}
          max={max}
          min={min}
          onBlur={() => this.setState({ focused: false })}
          onClick={this.onChange}
          onChange={this.onChange}
          onFocus={() => this.setState({ focused: true })}
          step={step}
          style={{ backgroundSize: `${bgWidth}%` }}
          tabIndex={tabIndex}
          type='range'
          title={title}
          value={value}
          ref={ref => { this.input = ref }}
        />
      </View>
    )
  }
}
