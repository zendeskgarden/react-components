import _Object$assign from "babel-runtime/core-js/object/assign";
import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

var Selectable = function Selectable(ChildComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      action = _ref.action,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === undefined ? false : _ref$preventDefault,
      _ref$stopPropagation = _ref.stopPropagation,
      stopPropagation = _ref$stopPropagation === undefined ? false : _ref$stopPropagation,
      _ref$selectOnHover = _ref.selectOnHover,
      selectOnHover = _ref$selectOnHover === undefined ? false : _ref$selectOnHover,
      _ref$selectEvent = _ref.selectEvent,
      selectEvent = _ref$selectEvent === undefined ? "onMouseDown" : _ref$selectEvent;

  var Selectable = function (_Component) {
    _inherits(Selectable, _Component);

    function Selectable() {
      var _temp, _this, _ret;

      _classCallCheck(this, Selectable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChoseValue = function (e) {
        var _this$props = _this.props,
            disabled = _this$props.disabled,
            onValueChosen = _this$props.onValueChosen,
            value = _this$props.value;


        if (!disabled && onValueChosen) {
          onValueChosen(value, e);
          preventDefault && e.preventDefault();
          stopPropagation && e.stopPropagation();
        }
      }, _this.onMouseEnter = function (e) {
        var onSelect = _this.props.onSelect;


        _this.hover = true;
        if (selectOnHover) {
          setTimeout(function () {
            onSelect && onSelect(e, _this);
          }, 0);
        }
      }, _this.onMouseLeave = function (e) {
        _this.hover = false;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Selectable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var selected = this.props.selected;


      if (!selected && nextProps.selected && !this.hover) {
        setTimeout(function () {
          if (_this2.domNode.scrollIntoViewIfNeeded) {
            _this2.domNode.scrollIntoViewIfNeeded(false);
          } else if (_this2.domNode.scrollIntoView) {
            _this2.domNode.scrollIntoView(false);
          }
        }, 0);
      }
    };

    Selectable.prototype.render = function render() {
      var _extends2,
          _this3 = this;

      var props = _extends({}, this.props, (_extends2 = {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, _extends2[selectEvent] = this.onChoseValue, _extends2));

      return React.createElement(ChildComponent, _extends({
        ref: function ref(_ref2) {
          _this3.domNode = _this3.domNode || _ref2 && findDOMNode(_ref2);
        }
      }, props));
    };

    return Selectable;
  }(Component);

  Selectable.selectable = true;
  Selectable.propTypes = {
    disabled: PropTypes.bool,
    onSelect: PropTypes.func,
    onValueChosen: PropTypes.func,
    selected: PropTypes.bool,
    value: PropTypes.any
  };
  Selectable.defaultProps = _Object$assign({}, ChildComponent.defaultProps || {}, {
    action: action,
    disabled: false
  });


  return Selectable;
};

export default Selectable;