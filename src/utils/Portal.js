import { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Heavily inspired by https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js

const isReact16 = ReactDOM.createPortal !== undefined;
const createPortal = isReact16
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentWillMount() {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
  }

  componentDidMount() {
    !isReact16 && createPortal(this, this.props.children, this.node);
  }

  componentWillReceiveProps(newProps) {
    !isReact16 && createPortal(this, newProps.children, this.node);
  }

  componentWillUnmount() {
    if (!this.node) return;

    !isReact16 && ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  }

  render() {
    if (isReact16) {
      return createPortal(this.props.children, this.node);
    } else {
      return null;
    }
  }
}
