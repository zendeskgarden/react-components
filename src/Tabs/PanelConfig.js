import { Component, PropTypes } from 'react'

export default class PanelConfig extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
  }

  render () {
    return null
  }
}
