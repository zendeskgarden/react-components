import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import View from "../core/View";
import ThemedComponent from "../utils/theming/ThemedComponent";

import styles from "./styles";

var Anchor = function (_ThemedComponent) {
  _inherits(Anchor, _ThemedComponent);

  function Anchor(props, context) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, _ThemedComponent.call(this, props, context, {
      namespace: "Anchor",
      styles: styles
    }));

    _this.onMouseDown = function () {
      _this.mouseInitiated = true;

      setTimeout(function () {
        _this.mouseInitiated = false;
      }, 0);
    };

    _this.onFocus = function (event) {
      var onFocus = _this.props.onFocus;

      onFocus && onFocus(event);

      if (_this.mouseInitiated) {
        return;
      }

      _this.setState({
        isFocused: true
      });
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;

      onBlur && onBlur(event);

      _this.setState({
        isFocused: false
      });
    };

    _this.state = {
      isFocused: false
    };

    _this.mouseInitiated = false;
    return _this;
  }

  Anchor.prototype.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;


    if (autoFocus) {
      this.anchorElement.focus();
    }
  };

  /**
   * Necessary to not show focus styling when focused by mouse
   */


  Anchor.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var theme = this.theme;

    var _props = this.props,
        className = _props.className,
        tabIndex = _props.tabIndex,
        children = _props.children,
        testId = _props.testId,
        anchorProps = _objectWithoutProperties(_props, ["className", "tabIndex", "children", "testId"]);

    var isFocused = this.state.isFocused;


    return React.createElement(
      View,
      {
        className: theme.container,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        testId: testId,
        onMouseDown: this.onMouseDown
      },
      React.createElement(
        "a",
        _extends({
          className: classNames(className, theme.anchor, (_classNames = {}, _classNames[theme.focused] = isFocused, _classNames)),
          ref: function ref(_ref) {
            _this2.anchorElement = _ref;
          },
          tabIndex: tabIndex
        }, anchorProps),
        children
      )
    );
  };

  return Anchor;
}(ThemedComponent);

Anchor.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string
};
Anchor.defaultProps = {
  tabIndex: 0
};
export default Anchor;