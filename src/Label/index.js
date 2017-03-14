import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import View from '../core/View'

import styles from './styles.css'

export default class Label extends Component {
  static propTypes = {
    avatar: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    onRemove: PropTypes.func,
    pill: PropTypes.bool,
    round: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    stretched: PropTypes.bool,
    tabIndex: PropTypes.number,
    title: PropTypes.string,
    /** <a href="#View">See View</a> */
    tooltipPositioning: () => {},
    type: PropTypes.oneOf([
      'default', 'dark', 'light', 'success', 'warning', 'error'
    ])
  }

  static defaultProps = {
    dir: 'ltr',
    size: 'medium',
    stretched: false,
    type: 'default'
  }

  renderAvatar = (avatar) => React.cloneElement(avatar, {
    className: classNames(styles.avatar, avatar.props.className)
  })

  onKeyboardRemove = (e) => {
    const { onRemove } = this.props

    e.preventDefault()
    onRemove(e)
  }

  renderRemove = (onRemove) => (
    <button tabIndex={-1} className={styles.remove} onClick={onRemove} />
  )

  render () {
    const {
      avatar,
      children,
      className,
      dir,
      onRemove,
      pill,
      round,
      size,
      stretched,
      tabIndex,
      type,
      title,
      tooltipPositioning
    } = this.props

    return (
      <View
        className={classNames(styles[type], styles[size], {
          [styles.pill]: pill,
          [styles.round]: round,
          [styles.rtl]: dir === 'rtl',
          [styles.stretched]: stretched
        }, className)}
        onDelete={onRemove && this.onKeyboardRemove}
        tabIndex={tabIndex}
        title={title}
        tooltipPositioning={tooltipPositioning}
      >
        { avatar && this.renderAvatar(avatar) }
        { children }
        { onRemove && this.renderRemove(onRemove) }
      </View>
    )
  }
}
