import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ItemConfig extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired
  }

  render () {
    return null
  }
}
