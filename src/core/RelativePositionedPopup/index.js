import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'

import View from '../View'
import getBestRelativePlacement from '../../utils/positioning/getBestRelativePlacement'

import styles from './styles.css'

const positions = [
  'bottom',
  'bottom_stretch',
  'bottom_left',
  'bottom_right',
  'left',
  'left_top',
  'left_bottom',
  'right',
  'right_top',
  'right_bottom',
  'top',
  'top_stretch',
  'top_left',
  'top_right'
]

const rtlMapping = {
  bottom_right: 'bottom_left',
  bottom_left: 'bottom_right',
  left: 'right',
  left_top: 'right_top',
  left_bottom: 'right_bottom',
  right: 'left',
  right_top: 'left_top',
  right_bottom: 'left_bottom',
  top_left: 'top_right',
  top_right: 'top_left'
}

const getCurrentOrigin = () => {
  const location = window.location
  const origin = location.origin || location.protocol + '//' + location.host

  return origin
}

const isIFrameOfCurrentOrigin = (iframe) => {
  const origin = getCurrentOrigin()
  return !iframe.src || iframe.src.indexOf(origin) === 0
}

const getDocuments = () => {
  const iframes = document.querySelectorAll('iframe')

  const iframeDocuments = Array.from(iframes)
    .filter(isIFrameOfCurrentOrigin)
    .map((iframe) => iframe.contentDocument)

  return [document, ...iframeDocuments]
}

class RelativePositionedPopup extends Component {
  static propTypes = {
    anchor: PropTypes.node.isRequired,
    dir: PropTypes.oneOf([ 'ltr', 'rtl' ]),
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,
    hidden: PropTypes.bool,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    positioning: PropTypes.oneOfType([
      PropTypes.oneOf(positions),
      PropTypes.arrayOf(PropTypes.oneOf(positions))
    ]).isRequired,
    testId: PropTypes.string,
    stretched: PropTypes.bool,
    onClickOutside: PropTypes.func
  }

  static defaultProps = {
    dir: 'ltr',
    hidden: true,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0
  }

  updatePlacement = () => {
    const { hidden } = this.props

    if (!hidden) {
      this.anchorRect = this.anchorElement.firstChild.getBoundingClientRect()
      this.popupRect = this.popupElement.firstChild.getBoundingClientRect()
      this.setState({
        placement: this.getBestRelativePlacement()
      })
    }
  }

  clickOutsideHandler = (e) => {
    const { hidden, onClickOutside } = this.props

    const isLeftClick = e.which === 1
    if (onClickOutside && !hidden && isLeftClick) {
      const target = e.target || document.elementFromPoint(e.pageX || e.clientX, e.pageY || e.clientY)
      const inSidePopup = this.popupElement && this.popupElement.contains(target)
      if (!inSidePopup) {
        setTimeout(() => {
          onClickOutside()
        }, 0)
      }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.updatePlacement)
    window.addEventListener('scroll', this.updatePlacement, true)

    getDocuments().forEach((doc) => {
      doc.addEventListener('click', this.clickOutsideHandler, true)
    })
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updatePlacement)
    window.removeEventListener('scroll', this.updatePlacement, true)

    getDocuments().forEach((doc) => {
      doc.removeEventListener('click', this.clickOutsideHandler, true)
    })
  }

  componentWillReceiveProps (nextProps) {
    const { hidden } = this.props

    if (hidden && !nextProps.hidden) {
      this.setState({ opening: true })
      setTimeout(() => {
        this.setState({ opening: false })
        this.updatePlacement()
      }, 0)
    } else if (!hidden && nextProps.hidden) {
      this.setState({ placement: null })
    } else {
      setTimeout(() => {
        this.updatePlacement()
      }, 0)
    }
  }

  getPositions = () => {
    const { dir, positioning } = this.props

    const positions = Array.isArray(positioning)
      ? positioning
      : [positioning]

    return (dir === 'rtl')
      ? positions.map(position => rtlMapping[position] || position)
      : positions
  }

  getAnchorMargins = () => {
    const {
      marginBottom,
      marginLeft,
      marginRight,
      marginTop
    } = this.props

    return {
      bottom: marginBottom,
      left: marginLeft,
      right: marginRight,
      top: marginTop
    }
  }

  getBestRelativePlacement = () => {
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const anchorRect = {
      top: this.anchorRect.top,
      left: this.anchorRect.left,
      width: this.anchorRect.width,
      height: this.anchorRect.height,
      margins: this.getAnchorMargins()
    }

    const target = {
      top: this.popupRect.top,
      left: this.popupRect.left,
      width: this.popupRect.width,
      height: this.popupRect.height
    }

    const bestPlacement = getBestRelativePlacement({
      positions: this.getPositions(),
      anchor: anchorRect,
      target,
      viewport
    })

    return bestPlacement
  }

  render () {
    const { anchor, children, hidden, testId, stretched } = this.props
    const { opening, placement } = this.state || {}

    let popupStyle = null
    if (placement) {
      popupStyle = {
        top: `${placement.rect.top}px`,
        left: `${placement.rect.left}px`,
        height: `${placement.rect.height}px`,
        width: `${placement.rect.width}px`
      }
    }

    const position = placement
      ? placement.position
      : this.getPositions()[0]

    return (
      <View
        className={ classNames(styles.container, {
          [styles.stretched]: stretched
        }) }
        testId={ testId }
      >
        <View
          className={ classNames(styles.trigger, {
            [styles.stretched]: stretched
          }) }
          ref={ (ref) => {
            this.anchorElement = findDOMNode(ref)
          }}
        >
          { anchor }
        </View>
        <View
          className={ classNames(styles.popup, {
            [styles.opening]: opening
          }) }
          hidden={ hidden }
          style={ popupStyle }
          ref={ (ref) => {
            this.popupElement = findDOMNode(ref)
          }}
        >
          {
            hidden
              ? null
              : typeof children === 'function' ? children(position) : children
          }
        </View>
      </View>
    )
  }
}

export default RelativePositionedPopup
