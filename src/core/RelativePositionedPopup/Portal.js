import { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    /**
     * Append RelativePositionGroup element to body to allow visibility
     * within overflow:hidden parents
     */
    const positionedGroup = document.createElement("div");
    document.body.appendChild(positionedGroup);

    this.relativelyPositionedGroup = positionedGroup;
  }

  componentWillUnmount() {
    document.body.removeChild(this.relativelyPositionedGroup);
  }

  componentDidUpdate() {
    const { children } = this.props;
    render(children, this.relativelyPositionedGroup);
  }

  render() {
    return null;
  }
}
