import { Component, PropTypes } from 'react'

export default class State extends Component {
  static propTypes = {
    children: PropTypes.func,
    initialState: PropTypes.object
  }

  static defaultProps = {
    initialState: {}
  }

  constructor (props) {
    super(props)
    this.state = {
      ...props.initialState
    }
  }

  render () {
    const {
      children,
      initialState
    } = this.props

    return children(this.state || initialState, this.setState.bind(this))
  }
}
