import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import _Object$keys from "babel-runtime/core-js/object/keys";
import React, { Component } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import styles from "./styles";

var hasAnyHandlers = function hasAnyHandlers(handlers) {
  return _Object$keys(handlers).some(function (key) {
    return handlers[key];
  });
};

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  View.prototype.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;


    if (autoFocus) {
      this.element.focus();
    }
  };

  View.prototype.componentWillUnmount = function componentWillUnmount() {
    var tooltips = this.context.tooltips;


    if (tooltips && this.tooltipId != null) {
      tooltips.hide(this.tooltipId);
    }
  };

  View.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        hidden = _props.hidden,
        onArrowDown = _props.onArrowDown,
        onArrowLeft = _props.onArrowLeft,
        onArrowRight = _props.onArrowRight,
        onArrowUp = _props.onArrowUp,
        onDelete = _props.onDelete,
        onEnter = _props.onEnter,
        onEscape = _props.onEscape,
        onKeyDown = _props.onKeyDown,
        onSpace = _props.onSpace,
        onTab = _props.onTab,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        testId = _props.testId,
        other = _objectWithoutProperties(_props, ["children", "className", "hidden", "onArrowDown", "onArrowLeft", "onArrowRight", "onArrowUp", "onDelete", "onEnter", "onEscape", "onKeyDown", "onSpace", "onTab", "title", "tooltipPositioning", "testId"]);

    var keyDownHandlers = {
      "8": onDelete,
      "9": onTab,
      "13": onEnter,
      "27": onEscape,
      "32": onSpace,
      "37": onArrowLeft,
      "38": onArrowUp,
      "39": onArrowRight,
      "40": onArrowDown
    };

    var eventHandlers = {};

    if (onKeyDown || hasAnyHandlers(keyDownHandlers)) {
      eventHandlers.onKeyDown = function (e) {
        var handler = keyDownHandlers[e.keyCode];
        handler && handler(e);
        onKeyDown && onKeyDown(e);
      };
    }

    var props = _extends({}, other, eventHandlers);

    var tooltips = this.context.tooltips;


    if (tooltips && title) {
      props.onMouseEnter = function (e) {
        _this2.tooltipId = tooltips.show(_this2.element, title, tooltipPositioning);
        _this2.props.onMouseOver && _this2.props.onMouseOver(e);
      };
      ["onMouseLeave", "onBlur", "onWheel", "onClick"].forEach(function (handler) {
        props[handler] = function (e) {
          tooltips.hide(_this2.tooltipId);
          _this2.props[handler] && _this2.props[handler](e);
        };
      });

      props["aria-label"] = title;
    } else if (title) {
      props.title = title;
    }

    if (testId) {
      props["data-test-id"] = testId;
    }

    if (hidden) {
      props["aria-hidden"] = true;
    }

    return React.createElement(
      "div",
      _extends({}, props, {
        className: classNames(styles.view, className),
        ref: function ref(_ref) {
          _this2.element = _ref;
        }
      }),
      children
    );
  };

  return View;
}(Component);

View.propTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  hidden: PropTypes.bool,
  onClick: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onArrowDown: PropTypes.func,
  onArrowLeft: PropTypes.func,
  onArrowRight: PropTypes.func,
  onArrowUp: PropTypes.func,
  onBackspace: PropTypes.func,
  onDelete: PropTypes.func,
  onEnter: PropTypes.func,
  onEscape: PropTypes.func,
  onMouseOver: PropTypes.func,
  onKeyDown: PropTypes.func,
  onScroll: PropTypes.func,
  onSpace: PropTypes.func,
  onTab: PropTypes.func,
  testId: PropTypes.string,
  title: PropTypes.string,
  /** One of: 'top', 'right', 'bottom', 'left' or as array (prioritization) */
  tooltipPositioning: function tooltipPositioning() {}
};
View.contextTypes = {
  tooltips: PropTypes.object
};
export default View;