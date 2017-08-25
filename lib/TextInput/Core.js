"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Core = function (_Component) {
  (0, _inherits3.default)(Core, _Component);

  function Core() {
    (0, _classCallCheck3.default)(this, Core);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Core.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        autoComplete = _props.autoComplete,
        autoFocus = _props.autoFocus,
        className = _props.className,
        defaultValue = _props.defaultValue,
        dir = _props.dir,
        disabled = _props.disabled,
        id = _props.id,
        isFocused = _props.isFocused,
        name = _props.name,
        maxLength = _props.maxLength,
        onArrowDown = _props.onArrowDown,
        onArrowLeft = _props.onArrowLeft,
        onArrowRight = _props.onArrowRight,
        onArrowUp = _props.onArrowUp,
        onClick = _props.onClick,
        onBlur = _props.onBlur,
        _onChange = _props.onChange,
        onDelete = _props.onDelete,
        onEnter = _props.onEnter,
        onEscape = _props.onEscape,
        onFocus = _props.onFocus,
        _onKeyDown = _props.onKeyDown,
        onPaste = _props.onPaste,
        placeholder = _props.placeholder,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        value = _props.value,
        valueType = _props.valueType;


    var handlers = {
      "8": onDelete,
      "13": onEnter,
      "27": onEscape,
      "37": onArrowLeft,
      "38": onArrowUp,
      "39": onArrowRight,
      "40": onArrowDown
    };

    var props = {
      autoFocus: autoFocus,
      autoComplete: autoComplete,
      className: className,
      "data-test-id": testId,
      defaultValue: defaultValue,
      dir: dir,
      disabled: disabled,
      id: id,
      name: name,
      maxLength: maxLength,
      onClick: onClick,
      onBlur: onBlur,
      onChange: function onChange(event) {
        _onChange && _onChange(event.target.value);
      },

      onFocus: onFocus,
      onKeyDown: function onKeyDown(event) {
        var handler = handlers[event.keyCode];
        handler && handler(event);
        _onKeyDown && _onKeyDown(event);
      },

      onPaste: onPaste,
      placeholder: placeholder,
      tabIndex: tabIndex,
      type: valueType || type,
      value: value
    };

    return _react2.default.createElement("input", (0, _extends3.default)({}, props, {
      ref: function ref(input) {
        _this2.input = input;
        input && isFocused && input.focus();
      }
    }));
  };

  return Core;
}(_react.Component);

Core.propTypes = {
  autoComplete: _propTypes2.default.oneOf(["on", "off"]),
  autoFocus: _propTypes2.default.bool,
  isFocused: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  disabled: _propTypes2.default.bool.isRequired,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onArrowDown: _propTypes2.default.func,
  onArrowLeft: _propTypes2.default.func,
  onArrowRight: _propTypes2.default.func,
  onArrowUp: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onEscape: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onPaste: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Use `valueType` instead */
  type: function type(props, propName, componentName) {
    if (propName in props) {
      return new Error("The TextInput does not accept a type prop use valueType instead");
    }
  },
  valueType: _propTypes2.default.oneOf(["email", "number", "password", "search", "tel", "text"]),
  value: _propTypes2.default.string
};
Core.defaultProps = {
  autoComplete: "off",
  disabled: false,
  valueType: "text"
};
exports.default = Core;