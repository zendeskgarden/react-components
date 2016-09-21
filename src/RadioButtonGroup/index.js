import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'

import View from '../core/View'

export default class RadioButtonGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    onSelect: PropTypes.func,
    selected: PropTypes.any
  }

  static defaultProps = {
    dir: 'ltr'
  }

  constructor (props, context) {
    super(props, context)
    this.keyboard = true
    this.id = uuid.v4()
  }

  onSelect = (value) => {
    const { onSelect } = this.props

    onSelect && onSelect(value)
  }

  render () {
    const {
      children,
      dir,
      disabled,
      selected
    } = this.props

    const radios = React.Children.map(children, (item, index) => (
      React.cloneElement(item, {
        disabled: ('disabled' in item.props) ? item.props.disabled : disabled,
        checked: selected === item.props.value,
        dir: dir,
        key: `radio-${index}`,
        name: this.id,
        onChange: this.onSelect
      })
    ))

    return (
      <View>
        { radios }
      </View>
    )
  }
}
