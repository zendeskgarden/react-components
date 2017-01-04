import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

const Selectable = (ChildComponent, {
  preventDefault = false,
  selectOnHover = true,
  selectEvent = 'onMouseDown'
} = {}) => {
  class Selectable extends Component {
    static selectable = true

    static propTypes = {
      disabled: PropTypes.bool,
      onSelect: PropTypes.func,
      onValueChosen: PropTypes.func,
      selected: PropTypes.bool,
      value: PropTypes.any
    }

    static defaultProps = {
      disabled: false
    }

    onSelect = (e) => {
      const { disabled, onValueChosen, value } = this.props

      if (!disabled && onValueChosen) {
        onValueChosen(value)
        if (preventDefault) {
          e.preventDefault()
        }
      }
    }

    onMouseEnter = (e) => {
      const { onSelect } = this.props

      this.hover = true
      if (selectOnHover) {
        setTimeout(() => {
          onSelect && onSelect(e, this)
        }, 0)
      }
    }

    onMouseLeave = (e) => {
      this.hover = false
    }

    componentWillReceiveProps (nextProps) {
      const { selected } = this.props

      if (!selected && nextProps.selected && !this.hover) {
        setTimeout(() => {
          if (this.domNode.scrollIntoViewIfNeeded) {
            this.domNode.scrollIntoViewIfNeeded(false)
          } else if (this.domNode.scrollIntoView) {
            this.domNode.scrollIntoView(false)
          }
        }, 0)
      }
    }

    render () {
      const props = {
        ...this.props,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        [selectEvent]: this.onSelect
      }

      return (
        <ChildComponent
          ref={(ref) => {
            this.domNode = this.domNode || (ref && findDOMNode(ref))
          }}
          {...props}
        />
      )
    }
  }

  return Selectable
}

export default Selectable
