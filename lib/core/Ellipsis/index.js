import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "../View";
import styles from "./styles";

var Ellipsis = function (_Component) {
  _inherits(Ellipsis, _Component);

  function Ellipsis(props) {
    _classCallCheck(this, Ellipsis);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.analyzeOverflow = function () {
      // setTimeout before reading the DOM element's dimensions:
      // In some cases, they may not be ready in the current stack.
      setTimeout(function () {
        if (!_this.refs.main) {
          return null;
        }

        var _this$refs$main$eleme = _this.refs.main.element,
            offsetWidth = _this$refs$main$eleme.offsetWidth,
            scrollWidth = _this$refs$main$eleme.scrollWidth;

        var isOverflowing = offsetWidth < scrollWidth;

        if (isOverflowing !== _this.state.isOverflowing) {
          _this.setState({ isOverflowing: isOverflowing });
        }
      }, 0);
    };

    _this.onWindowResize = function (e) {
      _this.analyzeOverflow();
    };

    _this.state = {};
    return _this;
  }

  Ellipsis.prototype.componentDidMount = function componentDidMount() {
    this.analyzeOverflow();

    window.addEventListener("resize", this.onWindowResize);
  };

  Ellipsis.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  };

  Ellipsis.prototype.componentDidUpdate = function componentDidUpdate() {
    this.analyzeOverflow();
  };

  Ellipsis.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        title = _props.title;


    var props = { className: styles.ellipsis };

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
    return React.createElement(
      View,
      _extends({ ref: "main" }, props),
      React.createElement("div", null),
      children
    );
  };

  return Ellipsis;
}(Component);

Ellipsis.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
export default Ellipsis;