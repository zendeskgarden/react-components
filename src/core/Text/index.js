import React, { PropTypes } from 'react'

const Text = ({
  children,
  className,
  onClick,
  tabIndex,
  testId,
  title,
  ...others
}) => (
  <span
    className={ className }
    data-test-id={ testId }
    onClick={ onClick }
    tabIndex={ tabIndex }
    title={ title }
    { ...others }
  >
    { children }
  </span>
)

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  title: PropTypes.string
}

export default Text
