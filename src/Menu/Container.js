import React, { PropTypes } from 'react'
import classNames from 'classnames'

import styles from './styles.css'

import View from '../core/View'

const arrowPositions = {
  'bottom': 'top',
  'bottom_left': 'top_right',
  'bottom_right': 'top_left',
  'left': 'right',
  'right': 'left',
  'top': 'bottom',
  'top_left': 'bottom_right',
  'top_right': 'bottom_left'
}

const Container = ({
  arrow,
  children,
  dir,
  fixedWidth,
  maxHeight,
  position,
  size
}) => {
  const style = {}
  const hasMaxHeight = typeof maxHeight !== 'undefined'

  if (hasMaxHeight) {
    style.maxHeight = typeof maxHeight === 'number'
      ? `${maxHeight}px`
      : maxHeight
  }

  return (
    <View
      className={ classNames(
        styles.menu,
        styles[`size_${size}`],
        styles[`position_${position}`],
        styles[dir], {
          [styles.fixed_width]: fixedWidth,
          [styles.arrow]: arrow,
          [styles[`arrow_${arrowPositions[position]}`]]: arrow
        }
      ) }
      role='menu'
    >
      <View
        className={ classNames({
          [styles.scrollable]: hasMaxHeight
        }) }
        style={ style }
      >
        { children }
      </View>
    </View>
  )
}

Container.propTypes = {
  arrow: PropTypes.bool,
  dir: PropTypes.oneOf([
    'ltr',
    'rtl'
  ]),
  fixedWidth: PropTypes.bool,
  children: PropTypes.node.isRequired,
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  position: PropTypes.oneOf([
    'bottom',
    'bottom_left',
    'bottom_right',
    'bottom_stretch',
    'left',
    'right',
    'top',
    'top_left',
    'top_right',
    'top_stretch'
  ]),
  size: PropTypes.oneOf([
    'small',
    'large'
  ])
}

Container.defaultProps = {
  arrow: false,
  dir: 'ltr',
  position: 'bottom_right',
  size: 'small'
}

export default Container
