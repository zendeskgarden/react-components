import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Selectable from '../core/Selectable'
import ThemedComponent from '../utils/theming/ThemedComponent'
import View from '../core/View'

import styles from './styles.css'

class Label extends ThemedComponent {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    selected: PropTypes.bool,
    selectedByMouse: PropTypes.bool,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {}
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'Tabs',
      styles
    })
  }

  render () {
    const {
      active,
      children,
      disabled,
      onClick,
      onMouseEnter,
      onMouseLeave,
      selected,
      selectedByMouse,
      title,
      tooltipPositioning
    } = this.props

    const { theme } = this

    return (
      <li
        aria-activedescendant={selected}
        aria-disabled={disabled}
        aria-selected={active}
        className={
          classNames(theme.label, {
            [theme.disabled]: disabled,
            [theme.selected]: active,
            [theme.focused]: !selectedByMouse && selected
          })
        }
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role='tab'
      >
        <View title={title} tooltipPositioning={tooltipPositioning}>
          { children }
        </View>
      </li>
    )
  }
}

export default Selectable(Label, { selectOnHover: false, selectEvent: 'onClick' })
