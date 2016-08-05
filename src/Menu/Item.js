import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'
import Selectable from '../core/Selectable'

import styles from './styles.css'

class Item extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.bool,
    testId: PropTypes.string,
    value: PropTypes.any
  }

  static defaultProps = {
    disabled: false,
    role: 'menuitem'
  }

  render () {
    const {
      children,
      disabled,
      role,
      selected,
      testId
    } = this.props

    return (
      <View
        className={ classNames(styles.item, {
          [styles.disabled]: disabled,
          [styles.selected]: selected
        }) }
        role={ role }
        testId={ testId }
      >
        { children }
      </View>
    )
  }
}

export default Selectable(Item, { preventDefault: true })
