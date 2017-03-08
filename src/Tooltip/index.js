import React, { PropTypes } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Tooltip = ({ left, top, content, position, inline }) => (
  <div
    className={classNames(styles.tooltip, styles[position])}
    style={{ left, top, position: inline ? 'absolute' : 'fixed' }}
  >
    {content}
  </div>
)

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  top: PropTypes.number,
  left: PropTypes.number
}

Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: 'top'
}

export default Tooltip
