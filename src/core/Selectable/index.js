import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import View from '../View'

const Selectable = (ChildComponent, {
  preventDefault = false,
  selectOnHover = true
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

    onMouseDown = (e) => {
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

      this.setState({ hover: true })
      if (selectOnHover) {
        setTimeout(() => {
          onSelect && onSelect(e, this)
        }, 0)
      }
    }

    onMouseLeave = (e) => {
      this.setState({ hover: false })
    }

    componentWillReceiveProps (nextProps) {
      const { selected } = this.props
      const { hover } = this.state || {}

      if (!selected && nextProps.selected && !hover) {
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
      const {
        disabled,
        selected
      } = this.props

      return (
        <View
          aria-disabled={ disabled }
          aria-activedescendant={ selected }
          onMouseDown={ this.onMouseDown }
          onMouseEnter={ this.onMouseEnter }
          onMouseLeave={ this.onMouseLeave }
          ref={ (ref) => {
            this.domNode = this.domNode || (ref && findDOMNode(ref))
          } }
        >
          <ChildComponent { ...this.props }/>
        </View>
      )
    }
  }

  return Selectable
}

export default Selectable
