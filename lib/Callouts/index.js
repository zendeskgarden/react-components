import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Callout from "../Callout";

import styles from "./styles";

var Callouts = function (_Component) {
  _inherits(Callouts, _Component);

  function Callouts(props, context) {
    _classCallCheck(this, Callouts);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context, {
      namespace: "Callout"
    }));

    _this.state = {};
    return _this;
  }

  Callouts.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        testId = _props.testId,
        floating = _props.floating,
        dir = _props.dir,
        children = _props.children,
        className = _props.className,
        zIndex = _props.zIndex;


    var props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    return React.createElement(
      "div",
      _extends({
        className: classNames(styles.callouts, (_classNames = {}, _classNames[styles.floating] = floating, _classNames[styles.rtl] = dir === "rtl", _classNames), className),
        style: { zIndex: zIndex }
      }, props),
      Children.map(children, function (child, index) {
        if (child && child.type === Callout) {
          return React.cloneElement(child, {
            floating: floating
          });
        } else {
          return child;
        }
      })
    );
  };

  return Callouts;
}(Component);

Callouts.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  testId: PropTypes.string,
  floating: PropTypes.bool,
  className: PropTypes.string,
  zIndex: PropTypes.number
};
Callouts.defaultProps = {
  dir: "ltr",
  floating: false,
  zIndex: 700
};
export default Callouts;