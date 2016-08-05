import React, { Component, PropTypes } from 'react'

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    title: PropTypes.string
  }

  render () {
    const {
      children,
      className,
      onClick,
      tabIndex,
      testId,
      title,
      ...others
    } = this.props

    return (
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
  }
}
