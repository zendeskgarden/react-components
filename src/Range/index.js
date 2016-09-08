import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import View from '../core/View'
import styles from './styles.css'

export default class Range extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    testId: PropTypes.string,
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    title: PropTypes.string
  }

  constructor (props, context) {
    super(props, context)
    this.id = uuid.v4()
    this.state = { focused: false }
  }

  onChange = (e) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(parseFloat(e.target.value))
    }
  }

  getBgWidth () {
    const { max, min, value } = this.props
    const percentFilled = 100 * (value - min) / (max - min)
    return percentFilled + '%'
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
    const css = `.range-${this.id}::-webkit-slider-runnable-track { background-size: ${this.getBgWidth()} }`

    return (
      <View className={classNames(styles.container, {
        [styles.focused]: focused
      })}>
        <style>{css}</style>
        <input
          className={ classNames(styles.input, `range-${this.id}`) }
          data-test-id={ testId }
          disabled={ disabled }
          max={ max }
          min={ min }
          onBlur={ () => this.setState({ focused: false }) }
          onChange={ this.onChange }
          onFocus={ () => this.setState({ focused: true }) }
          step={ step }
          tabIndex={ tabIndex }
          type='range'
          title={ title }
          value={ value }
        />
      </View>
    )
  }
}
