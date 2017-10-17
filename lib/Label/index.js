import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";
import accessibilityStyles from "../utils/styling/accessibility";

var Label = function (_ThemedComponent) {
  _inherits(Label, _ThemedComponent);

  function Label(props, context) {
    _classCallCheck(this, Label);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Label",
      styles: styles
    }));

    _this.renderAvatar = function (avatar) {
      return React.cloneElement(avatar, {
        className: classNames(_this.theme.avatar, avatar.props.className)
      });
    };

    _this.onKeyboardRemove = function (e) {
      var onRemove = _this.props.onRemove;


      e.preventDefault();
      onRemove(e);
    };

    _this.renderRemove = function (onRemove) {
      var theme = _this.theme;
      var testId = _this.props.testId;

      return React.createElement("button", {
        tabIndex: -1,
        "data-test-id": testId && testId + "-remove",
        className: theme.remove,
        onClick: onRemove
      });
    };

    return _this;
  }

  Label.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
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
        className: classNames(theme[type], theme[size], (_classNames = {}, _classNames[theme.pill] = pill, _classNames[theme.round] = round, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.stretched] = stretched, _classNames), className),
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
}(ThemedComponent);

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