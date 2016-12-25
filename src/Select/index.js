import React, { PropTypes } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import { Menu, View } from '..'
import ThemedComponent from '../utils/theming/ThemedComponent'

import styles from './styles.css'

export default class Select extends ThemedComponent {
  static Item = Menu.Item
  static Separator = Menu.Separator

  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * This is for use in self-service-components only
     */
    className: PropTypes.string,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    /**
     * This is for use in self-service-components only
     */
    inputClassName: PropTypes.string,
    label: PropTypes.string,
    maxHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onOpen: PropTypes.func,
    onSelect: PropTypes.func,
    selected: PropTypes.node,
    stretched: PropTypes.bool,
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  }

  static defaultProps = {
    dir: 'ltr',
    disabled: false,
    stretched: true,
    tabIndex: 0
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'Select',
      styles
    })

    this.generatedId = uuid.v4()
    this.state = {
      open: false
    }
  }

  getId = () => (
    this.props.id || this.generatedId
  )

  renderLabel = () => {
    const { label } = this.props
    const { theme } = this

    if (!label) {
      return null
    }

    return (
      <label
        className={ theme.label }
        htmlFor={ this.getId() }
      >
        { label }
      </label>
    )
  }

  onClick = (e) => {
    const { disabled } = this.props

    if (disabled) {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  onOpen = () => {
    const { onOpen } = this.props
    this.setState({ open: true })
    onOpen && onOpen()
  }

  onClose = () => {
    const { onClose } = this.props
    this.setState({ open: false })
    onClose && onClose()
  }

  render () {
    const {
      children,
      className,
      inputClassName,
      dir,
      disabled,
      maxHeight,
      onBlur,
      onFocus,
      onSelect,
      selected,
      stretched,
      tabIndex,
      testId
    } = this.props

    const { open } = this.state
    const { theme } = this

    return (
      <View
        className={ classNames(theme.txt, {
          [theme.rtl]: dir === 'rtl',
          [theme.stretched]: stretched
        }, className) }
        testId={ testId }
      >
        { this.renderLabel() }
        <Menu
          dir={ dir }
          maxHeight={ maxHeight }
          onSelect={ onSelect }
          positioning={['bottom_stretch', 'top_stretch']}
          onOpen={ this.onOpen }
          onClose={ this.onClose }
          trigger={
            <View
              className={ classNames(theme.input, {
                [theme.disabled]: disabled,
                [theme.open]: open
              }, inputClassName) }
              dir={ dir }
              disabled={ disabled }
              onBlur={ onBlur }
              onClick={ this.onClick }
              onFocus={ onFocus }
              role='button'
              tabIndex={ disabled ? null : tabIndex }
            >
              { selected }
            </View>
          }
          stretched={ stretched }
        >
          { children }
        </Menu>
      </View>
    )
  }
}
