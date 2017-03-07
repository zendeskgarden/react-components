'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Core = function (_Component) {
  (0, _inherits3.default)(Core, _Component);

  function Core(props, context) {
    (0, _classCallCheck3.default)(this, Core);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.onKeyboardClick = function (e) {
      var onClick = _this.props.onClick;

      onClick && onClick(e);
      e.preventDefault();
    };

    _this.onMouseDown = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else {
        _this.keyboard = false;
      }
    };

    _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;


      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      } else {
        onClick && onClick(e);
      }
    };

    _this.onFocus = function (e) {
      var _this$props2 = _this.props,
          onFocus = _this$props2.onFocus,
          onKeyboardFocus = _this$props2.onKeyboardFocus;


      onFocus && onFocus(e);
      _this.keyboard && onKeyboardFocus && onKeyboardFocus(e);

      _this.keyboard = true;
    };

    _this.keyboard = true;
    return _this;
  }

  Core.prototype.render = function render() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        className = _props.className,
        children = _props.children,
        disabled = _props.disabled,
        onBlur = _props.onBlur,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title;


    return _react2.default.createElement(
      _View2.default,
      {
        autoFocus: autoFocus,
        className: className,
        testId: testId,
        disabled: disabled,
        onBlur: onBlur,
        onClick: this.onClick,
        onEnter: this.onKeyboardClick,
        onFocus: this.onFocus,
        onMouseDown: this.onMouseDown,
        onSpace: this.onKeyboardClick,
        tabIndex: disabled ? null : tabIndex,
        role: 'button',
        title: title
      },
      children
    );
  };

  return Core;
}(_react.Component);

Core.propTypes = {
  autoFocus: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['default', 'primary', 'basic']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: _react.PropTypes.bool,
  stretched: _react.PropTypes.bool,
  onBlur: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onKeyboardFocus: _react.PropTypes.func,
  pill: _react.PropTypes.bool,
  tabIndex: _react.PropTypes.number,
  testId: _react.PropTypes.string,
  title: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired
};
Core.defaultProps = {
  tabIndex: 0,
  type: 'default',
  size: 'small'
};
exports.default = Core;