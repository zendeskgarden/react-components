import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";

import styles from "./styles";

var sizes = ["small", "medium", "large"];

var Avatar = function (_Component) {
  _inherits(Avatar, _Component);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Avatar.prototype.render = function render() {
    var _props = this.props,
        alt = _props.alt,
        className = _props.className,
        onError = _props.onError,
        onLoad = _props.onLoad,
        src = _props.src,
        size = _props.size,
        status = _props.status,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    var classes = [styles.avatar, styles["status_" + status], styles["type_" + type]];

    var avatarStyles = {};

    if (sizes.includes(size)) {
      classes.push(styles["size_" + size]);
    } else {
      avatarStyles.height = size;
      avatarStyles.width = size;
    }

    return React.createElement(
      View,
      {
        className: classNames(classes, className),
        style: avatarStyles,
        tabIndex: tabIndex,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      React.createElement("img", { alt: alt, src: src, onError: onError, onLoad: onLoad })
    );
  };

  return Avatar;
}(Component);

Avatar.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.oneOf(sizes), PropTypes.number, PropTypes.string]).isRequired,
  status: PropTypes.oneOf(["default", "present", "away", "active"]).isRequired,
  tabIndex: PropTypes.number,
  testId: PropTypes.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: PropTypes.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  type: PropTypes.oneOf(["human", "system"]).isRequired
};
Avatar.defaultProps = {
  alt: "",
  size: "medium",
  status: "default",
  type: "human"
};
export default Avatar;