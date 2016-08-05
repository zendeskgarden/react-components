import React from 'react'
import SingleSelectionModel from './SingleSelectionModel'

export default class ReactSingleSelectionModel {
  constructor ({ wrapping = 'items', selectOnSpace = true } = {}) {
    this.model = new SingleSelectionModel({ wrapping })
    this.onSelectionChanged = null
    this.onValueChosen = null
    this.model.onSelectionChanged = (newSelection, previousSelection) => {
      if (newSelection !== previousSelection) {
        this.onSelectionChanged && this.onSelectionChanged()
      }
    }
    this.selectOnSpace = selectOnSpace
    this._items = []
  }

  set items (items) {
    this._items = items
    const selectable = []
    const selection = this.model.selection

    React.Children.forEach(this._items, (item) => {
      if (item && item.type && item.type.selectable && !item.props.disabled) {
        selectable.push(item)
        if (this.hasSelection() && item.key === selection.key) {
          this.model.selection = item
        }
      }
    })

    this.model.items = selectable
  }

  get items () {
    return React.Children.map(this._items, (child) => {
      if (child && child.type && child.type.selectable) {
        return React.cloneElement(child, {
          onSelect: () => this.model.select(child),
          onValueChosen: (value) => {
            if (this.model.selection !== child) {
              this.model.select(child)
            }
            this.choseSelection()
          },
          selected: child === this.model.selection
        })
      } else {
        return child
      }
    })
  }

  get selection () {
    if (this.hasSelection()) {
      return this.model.selection.props.value
    } else {
      return null
    }
  }

  handleKeyDown = (event) => {
    const keyDownHandlers = {
      '13': this.onEnter,
      '32': this.onSpace,
      '38': this.onArrowUp,
      '40': this.onArrowDown
    }

    const handler = keyDownHandlers[event.keyCode]
    handler && handler(event)
  }

  choseSelection = () => {
    if (this.hasSelection()) {
      const selection = this.model.selection
      const value = selection.props.value
      selection.props.onSelect && selection.props.onSelect(value)
      this.onValueChosen && this.onValueChosen(value)
      return true
    }
  }

  hasSelection = () => this.model.hasSelection()

  onEnter = (event) => {
    if (this.choseSelection()) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  onSpace = (event) => {
    if (this.selectOnSpace && this.choseSelection()) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  onArrowDown = (event) => {
    if (this.model.selectNext()) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  onArrowUp = (event) => {
    if (this.model.selectPrevious()) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  clear = () => {
    this.model.clear()
  }
}
