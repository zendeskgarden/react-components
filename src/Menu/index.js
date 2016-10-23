import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import ReactSingleSelectionModel from '../utils/selection/ReactSingleSelectionModel'
import View from '../core/View'
import RelativePositionedPopup from '../core/RelativePositionedPopup'

import Item from './Item'
import Container from './Container'
import Separator from './Separator'

import styles from './styles.css'

export default class Menu extends Component {
  static propTypes = {
    arrow: PropTypes.bool,
    dir: PropTypes.oneOf([
      'ltr',
      'rtl'
    ]),
    children: PropTypes.node.isRequired,
    fixedWidth: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onSelect: PropTypes.func,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    maxHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    positioning: RelativePositionedPopup.propTypes.positioning,
    size: PropTypes.oneOf([
      'small',
      'large'
    ]),
    stretched: PropTypes.bool,
    testId: PropTypes.string,
    trigger: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ]).isRequired
  }

  static defaultProps = {
    arrow: false,
    dir: 'ltr',
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    positioning: ['bottom_right', 'top_right'],
    stretched: false,
    size: 'small'
  }

  static Container = Container
  static Item = Item
  static Separator = Separator

  constructor (props) {
    super(props)
    this.selectionModel = new ReactSingleSelectionModel()
    this.selectionModel.onSelectionChanged = this.onSelectionChanged
    this.selectionModel.onValueChosen = this.onValueChosen
    this.state = {
      hidden: true,
      items: []
    }
  }

  setSelectableItems (children) {
    this.selectionModel.items = children
    this.setState({ items: this.selectionModel.items })
  }

  componentWillMount () {
    const { children } = this.props
    this.setSelectableItems(children)
  }

  componentWillReceiveProps = (nextProps) => {
    const { children } = nextProps
    this.setSelectableItems(children)
  }

  onSelectionChanged = () => {
    const items = this.selectionModel.items
    this.setState({ items })
    this.showMenu()
  }

  onValueChosen = (value) => {
    const { onSelect } = this.props
    this.closeMenu()
    onSelect && onSelect(value)
  }

  showMenu = () => {
    const { onOpen } = this.props

    if (this.state.hidden) {
      this.setState({ hidden: false }, () => {
        onOpen && onOpen()
      })
    }
  }

  closeMenu = () => {
    const { onClose } = this.props

    this.selectionModel.clear()
    this.setState({ hidden: true }, () => {
      onClose && onClose()
    })
  }

  toggleHidden = () => {
    if (this.state.hidden) {
      this.showMenu()
    } else {
      this.closeMenu()
    }
  }

  keyboardToggleHidden = (e) => {
    if (!this.selectionModel.hasSelection()) {
      this.toggleHidden()
      e.preventDefault()
      e.stopPropagation()
    }
  }

  render () {
    const {
      arrow,
      dir,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      positioning,
      trigger,
      testId,
      stretched,
      ...other
    } = this.props

    const {
      hidden,
      items
    } = this.state

    const anchor = (
      <View
        className={ classNames({
          [styles.stretched]: stretched
        }) }
        onKeyDown={ this.selectionModel.handleKeyDown }
        onBlur={ this.closeMenu }
        onClick={ this.toggleHidden }
        onEnter={ this.keyboardToggleHidden }
        onEscape={ this.closeMenu }
        onSpace={ this.keyboardToggleHidden }
      >
        {
          (typeof trigger === 'function')
          ? trigger({ open: !hidden })
          : trigger
        }
      </View>
    )

    const arrowMargin = arrow ? 3 : 0

    return (
      <View
        className={ classNames(styles.container, {
          [styles.stretched]: stretched
        }) }
        testId={ testId }
      >
        <RelativePositionedPopup
          anchor={ anchor }
          dir={ dir }
          hidden={ hidden }
          positioning={ positioning }
          marginTop={ marginTop + arrowMargin }
          marginLeft={ marginLeft + arrowMargin }
          marginRight={ marginRight + arrowMargin }
          marginBottom={ marginBottom + arrowMargin }
          stretched={ stretched }
        >
          {
            (position) => (
              <Container
                {...other}
                animate={ !hidden }
                dir={ dir }
                arrow={ arrow }
                position={ position }
              >
                { items }
              </Container>
            )
          }
        </RelativePositionedPopup>
      </View>
    )
  }
}
