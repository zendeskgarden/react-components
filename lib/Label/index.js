import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import styles from "./styles";
import accessibilityStyles from "../utils/styling/accessibility";

var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    var _temp, _this, _ret;

    _classCallCheck(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderAvatar = function (avatar) {
      return React.cloneElement(avatar, {
        className: classNames(styles.avatar, avatar.props.className)
      });
    }, _this.onKeyboardRemove = function (e) {
      var onRemove = _this.props.onRemove;


      e.preventDefault();
      onRemove(e);
    }, _this.renderRemove = function (onRemove) {
      var testId = _this.props.testId;

      return React.createElement("button", {
        tabIndex: -1,
        "data-test-id": testId && testId + "-remove",
        className: styles.remove,
        onClick: onRemove
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Label.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        avatar = _props.avatar,
        children = _props.children,
        className = _props.className,
        deleteAccessibilityMessage = _props.deleteAccessibilityMessage,
        dir = _props.dir,
        onRemove = _props.onRemove,
        pill = _props.pill,
        round = _props.round,
        size = _props.size,
        stretched = _props.stretched,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    return React.createElement(
      View,
      {
        className: classNames(styles[type], styles[size], (_classNames = {}, _classNames[styles.pill] = pill, _classNames[styles.round] = round, _classNames[styles.rtl] = dir === "rtl", _classNames[styles.stretched] = stretched, _classNames), className),
        onDelete: onRemove && this.onKeyboardRemove,
        tabIndex: tabIndex,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      avatar && this.renderAvatar(avatar),
      React.createElement(
        "span",
        null,
        children
      ),
      onRemove && React.createElement(
        "span",
        { className: accessibilityStyles["u-visibility-screenreader"] },
        deleteAccessibilityMessage
      ),
      onRemove && this.renderRemove(onRemove)
    );
  };

  return Label;
}(Component);

Label.propTypes = {
  avatar: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  onRemove: PropTypes.func,
  pill: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  stretched: PropTypes.bool,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["default", "dark", "light", "success", "warning", "error"]),
  deleteAccessibilityMessage: PropTypes.string
};
Label.defaultProps = {
  dir: "ltr",
  size: "medium",
  stretched: false,
  type: "default",
  deleteAccessibilityMessage: "Press delete to remove this label."
};
export default Label;