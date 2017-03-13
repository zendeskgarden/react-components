import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

import ThemedComponent from '../utils/theming/ThemedComponent'

export default class Tooltip extends ThemedComponent {
  static propTypes = {
    content: PropTypes.string,
    inline: PropTypes.bool,
    left: PropTypes.number,
    /** For displaying a plain, independent tooltip  */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    size: PropTypes.oneOf(['default', 'medium', 'large']),
    top: PropTypes.number
  }

  static defaultProps = {
    top: 0,
    left: 0,
    position: 'top',
    inline: false,
    size: 'default'
  }

  render () {
    const {
      left,
      top,
      content,
      position,
      inline,
      size
    } = this.props

    return (
      <div
        className={classNames(
          styles.tooltip,
          styles[position],
          styles[`size_${size}`],
          { [styles.inline]: inline }
        )}
        style={{ left, top }}
      >
        {content}
      </div>
    )
  }
}
