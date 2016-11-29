import React, { PropTypes } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import styles from './styles.css'

export default class Range extends ThemedComponent {
  static propTypes = {
    id: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
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
    this.state = { focused: false }
  }

  getId = () => (
    this.props.id || this.generatedId
  )

  onChange = (e) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(parseFloat(e.target.value))
    }
  }

  getBgWidth () {
    let { max, min, value } = this.props

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
        className={ theme.label }
        htmlFor={ this.getId() }
      >
        { label }
      </label>
    )
  }

  render () {
    const {
      disabled,
      max,
      min,
      step,
      tabIndex,
      testId,
      title,
      value
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View className={classNames(theme.range, {
        [theme.focused]: focused
      })}>
        { this.renderLabel() }
        <input
          className={ theme.input }
          data-test-id={ testId }
          disabled={ disabled }
          id={ this.getId() }
          max={ max }
          min={ min }
          onBlur={ () => this.setState({ focused: false }) }
          onChange={ this.onChange }
          onFocus={ () => this.setState({ focused: true }) }
          step={ step }
          style={{ backgroundSize: `${this.getBgWidth()}%` }}
          tabIndex={ tabIndex }
          type='range'
          title={ title }
          value={ value }
        />
      </View>
    )
  }
}
