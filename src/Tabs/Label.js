import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Selectable from '../core/Selectable'

import styles from './styles'

class Label extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    selected: PropTypes.bool,
    selectedByMouse: PropTypes.bool
  }

  constructor (props) {
    super(props)
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
      selectedByMouse
    } = this.props

    return (
      <li
        aria-activedescendant={ selected }
        aria-disabled={ disabled }
        aria-selected={ active }
        className={
          classNames(styles.label, {
            [styles.disabled]: disabled,
            [styles.selected]: active,
            [styles.focused]: !selectedByMouse && selected
          })
        }
        onClick={ onClick }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        role='tab'
      >
        { children }
      </li>
    )
  }
}

export default Selectable(Label, { selectOnHover: false, selectEvent: 'onClick' })
