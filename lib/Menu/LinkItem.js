import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Selectable from "../core/Selectable";

import styles from "./styles";

var LinkItem = function (_Component) {
  _inherits(LinkItem, _Component);

  function LinkItem() {
    _classCallCheck(this, LinkItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LinkItem.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId,
        href = _props.href,
        target = _props.target;


    return React.createElement(
      "a",
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        className: classNames(styles.item, (_classNames = {}, _classNames[styles.disabled] = disabled, _classNames[styles.selected] = selected, _classNames)),
        disabled: disabled,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: role,
        "data-test-id": testId,
        href: href,
        target: target
      },
      children
    );
  };

  return LinkItem;
}(Component);

LinkItem.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  role: PropTypes.string,
  selected: PropTypes.bool,
  testId: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
};
LinkItem.defaultProps = {
  disabled: false,
  role: "menuitem",
  target: "_self"
};


export default Selectable(LinkItem, {
  action: function action(props, event) {
    var href = props.href,
        target = props.target;

    var openInNewWindow = event.ctrlKey || event.metaKey;

    var newWindow = window.open(href, openInNewWindow ? "_blank" : target);
    newWindow.opener = null;
  },
  preventDefault: true
});