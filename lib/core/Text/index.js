import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../View";
import styles from "./styles";

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Text.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        onClick = _props.onClick,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        others = _objectWithoutProperties(_props, ["children", "className", "onClick", "tabIndex", "testId", "title"]);

    return React.createElement(
      View,
      _extends({
        className: classNames(className, styles.container),
        testId: testId,
        onClick: onClick,
        tabIndex: tabIndex,
        title: title
      }, others),
      children
    );
  };

  return Text;
}(Component);

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  title: PropTypes.string
};
export default Text;