import React, { Component, PropTypes } from 'react'

import View from '../View'
import styles from './styles.css'

export default class Ellipsis extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  analyzeOverflow = () => {
    const { offsetWidth, scrollWidth } = this.refs.main.element
    const isOverflowing = offsetWidth < scrollWidth

    if (isOverflowing !== this.state.isOverflowing) {
      this.setState({ isOverflowing })
    }
  }

  onWindowResize = e => {
    this.analyzeOverflow()
  }

  componentDidMount () {
    this.analyzeOverflow()

    window.addEventListener('resize', this.onWindowResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResize)
  }

  componentDidUpdate () {
    this.analyzeOverflow()
  }

  render () {
    const { children, title } = this.props

    const props = { className: styles.ellipsis }

    if ('title' in this.props) {
      props.title = title
    } else if (typeof children === 'string' && this.state.isOverflowing) {
      props.title = children
    }

    return (
      <View ref='main' {...props}>
        { children }
      </View>
    )
  }
}
