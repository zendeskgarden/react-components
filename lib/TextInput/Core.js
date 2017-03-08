'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
        onBlur = _props.onBlur,
        onChangeText = _props.onChangeText,
        onDelete = _props.onDelete,
        onEnter = _props.onEnter,
        onEscape = _props.onEscape,
        onFocus = _props.onFocus,
        _onKeyDown = _props.onKeyDown,
        placeholder = _props.placeholder,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        type = _props.type,
        value = _props.value;


    var handlers = {
      '8': onDelete,
      '13': onEnter,
      '27': onEscape,
      '37': onArrowLeft,
      '38': onArrowUp,
      '39': onArrowRight,
      '40': onArrowDown
    };

    var props = {
      autoFocus: autoFocus,
      autoComplete: autoComplete,
      className: className,
      'data-test-id': testId,
      defaultValue: defaultValue,
      dir: dir,
      disabled: disabled,
      id: id,
      name: name,
      maxLength: maxLength,
      onBlur: onBlur,
      onChange: function onChange(event) {
        onChangeText && onChangeText(event.target.value);
      },

      onFocus: onFocus,
      onKeyDown: function onKeyDown(event) {
        var handler = handlers[event.keyCode];
        handler && handler(event);
        _onKeyDown && _onKeyDown(event);
      },

      placeholder: placeholder,
      tabIndex: tabIndex,
      type: type,
      value: value
    };

    return _react2.default.createElement('input', (0, _extends3.default)({}, props, {
      ref: function ref(input) {
        _this2.input = input;
        input && isFocused && input.focus();
      }
    }));
  };

  return Core;
}(_react.Component);

Core.propTypes = {
  autoComplete: _react.PropTypes.oneOf(['on', 'off']),
  autoFocus: _react.PropTypes.bool,
  isFocused: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  dir: _react.PropTypes.oneOf(['ltr', 'rtl']),
  disabled: _react.PropTypes.bool.isRequired,
  id: _react.PropTypes.string,
  name: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  onArrowDown: _react.PropTypes.func,
  onArrowLeft: _react.PropTypes.func,
  onArrowRight: _react.PropTypes.func,
  onArrowUp: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChangeText: _react.PropTypes.func,
  onDelete: _react.PropTypes.func,
  onEnter: _react.PropTypes.func,
  onEscape: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  tabIndex: _react.PropTypes.number,
  testId: _react.PropTypes.string,
  type: _react.PropTypes.string,
  value: _react.PropTypes.string
};
Core.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  type: 'text'
};
exports.default = Core;