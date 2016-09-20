import React, { Component, PropTypes } from 'react'

import CloseIcon from '!!babel!react-svg!zd-svg-icons/src/14-remove.svg'
import styles from './styles.css'

export default class CloseButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render () {
    const { onClick } = this.props

    return (
      <button
        aria-label='close'
        className={ styles.close }
        onClick={ onClick }
        tabIndex={-1}
      >
        <CloseIcon/>
      </button>
    )
  }
}
