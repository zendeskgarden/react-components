import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Selectable from '../core/Selectable'

import styles from '../Button/styles.css'

class Item extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    selected: PropTypes.bool,
    selectedByMouse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  static defaultProps = {
    size: 'small'
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
      size
    } = this.props

    return (
      <button
        aria-activedescendant={ selected }
        aria-disabled={ disabled }
        aria-selected={ active }
        className={
          classNames(styles.type_default, styles[`size_${size}`], {
            [styles.disabled]: disabled,
            [styles.active]: active,
            [styles.focused]: !selectedByMouse && selected
          })
        }
        onClick={ onClick }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        role='tab'
        tabIndex='-1'
      >
        { children }
      </button>
    )
  }
}

export default Selectable(Item, { selectOnHover: false, selectEvent: 'onClick' })
