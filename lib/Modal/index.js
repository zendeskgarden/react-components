import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { findDOMNode } from "react-dom";
import { deprecate } from "react-is-deprecated";

import ThemedComponent from "../utils/theming/ThemedComponent";
import styles from "./styles";
import View from "../core/View/";
import FocusJail from "../utils/FocusJail";

import Body from "./Body";
import CloseButton from "./CloseButton";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

var Modal = function (_ThemedComponent) {
  _inherits(Modal, _ThemedComponent);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Modal",
      styles: styles
    }));

    _this.onTab = function (e) {
      _this.tabJail && _this.tabJail.onTab(e);
    };

    return _this;
  }

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var hidden = this.props.hidden;
    var prevHidden = prevProps.hidden;


    if (!hidden && prevHidden) {
      document.querySelector("html").style.overflow = "hidden";
    } else if (hidden && !prevHidden) {
      document.querySelector("html").style.overflow = "";
      this.tabJail = null;
    }
  };

  Modal.prototype.render = function render() {
    var _this2 = this,
        _classNames;

    var _props = this.props,
        children = _props.children,
        dir = _props.dir,
        hidden = _props.hidden,
        onClose = _props.onClose,
        size = _props.size,
        testId = _props.testId,
        width = _props.width;


    if (hidden) {
      return null;
    }

    var theme = this.theme;


    return React.createElement(
      View,
      {
        className: classNames(theme.backdrop, theme[dir]),
        onClick: onClose,
        onEscape: onClose,
        onTab: this.onTab,
        ref: function ref(_ref) {
          if (_ref && !_this2.tabJail) {
            _this2.tabJail = new FocusJail(findDOMNode(_ref).firstChild);
          }
        }
      },
      React.createElement(
        View,
        {
          "aria-labelledby": "dialog-title",
          className: classNames(theme.dialog, theme["size_" + size], theme[dir], (_classNames = {}, _classNames[theme.open] = !hidden, _classNames)),
          onClick: function onClick(e) {
            return e.stopPropagation();
          },
          role: "dialog",
          style: { width: width },
          tabIndex: -1,
          testId: testId
        },
        children
      )
    );
  };

  return Modal;
}(ThemedComponent);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  hidden: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(["medium", "large"]),
  type: deprecate(PropTypes.oneOf(["default", "transparent", "lightbox"]), "The Modal component 'type' prop is deprecated and will be removed in a future version."),
  testId: PropTypes.string,
  width: PropTypes.string
};
Modal.defaultProps = {
  dir: "ltr",
  hidden: false,
  size: "medium"
};
Modal.Body = Body;
Modal.CloseButton = CloseButton;
Modal.Footer = Footer;
Modal.Header = Header;
Modal.Title = Title;
export default Modal;