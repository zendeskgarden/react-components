import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

export default class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)
    this.state = { focused: false }
  }

  render () {
    const { onClick } = this.props
    const { focused } = this.state

    return (
      <button
        aria-label='close'
        className={
          classNames(styles.close, {
            [styles.close_focused]: focused
          })
        }
        onBlur={() => this.setState({ focused: false })}
        onClick={onClick}
        onFocus={() => this.setState({ focused: true })}
      />
    )
  }
}
