import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "../View";
import styles from "./styles.css";

export default class Ellipsis extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  analyzeOverflow = () => {
    // setTimeout before reading the DOM element's dimensions:
    // In some cases, they may not be ready in the current stack.
    setTimeout(() => {
      if (!this.refs.main) {
        return null;
      }

      const { offsetWidth, scrollWidth } = this.refs.main.element;
      const isOverflowing = offsetWidth < scrollWidth;

      if (isOverflowing !== this.state.isOverflowing) {
        this.setState({ isOverflowing });
      }
    }, 0);
  };

  onWindowResize = e => {
    this.analyzeOverflow();
  };

  componentDidMount() {
    this.analyzeOverflow();

    window.addEventListener("resize", this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  componentDidUpdate() {
    this.analyzeOverflow();
  }

  render() {
    const { children, title } = this.props;

    const props = { className: styles.ellipsis };

    if ("title" in this.props) {
      props.title = title;
    } else if (this.state.isOverflowing) {
      props.title = this.refs.main.element.textContent;
    }

    /*
      <div />
      Prevent Safari quirk that causes native tooltips to show along-side our tooltips:
      http://stackoverflow.com/a/42023502
    */
    return (
      <View ref="main" {...props}>
        <div />
        {children}
      </View>
    );
  }
}
