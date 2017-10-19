import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const contextTypes = {
  rcTheme: PropTypes.object,
  tooltips: PropTypes.object
};

class ForwardContext extends Component {
  static propTypes = {
    children: PropTypes.node,
    context: PropTypes.object.isRequired
  };

  static childContextTypes = contextTypes;

  getChildContext() {
    return this.props.context;
  }

  render() {
    return this.props.children;
  }
}

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static contextTypes = contextTypes;

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

    render(
      <ForwardContext context={this.context}>
        {children}
      </ForwardContext>,
      this.relativelyPositionedGroup
    );
  }

  render() {
    return null;
  }
}
