'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Core = require('./Core');

var _Core2 = _interopRequireDefault(_Core);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_ThemedComponent) {
  (0, _inherits3.default)(TextArea, _ThemedComponent);

  function TextArea(props, context) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'TextArea',
      styles: _styles2.default
    }));

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.renderLabel = function () {
      var label = _this.props.label;
      var theme = _this.theme;


      if (!label) {
        return null;
      }

      return _react2.default.createElement(
        'label',
        {
          className: theme.label,
          htmlFor: _this.getId()
        },
        label
      );
    };

    _this.generatedId = _uuid2.default.v4();
    return _this;
  }

  TextArea.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        className = _props.className,
        resizable = _props.resizable,
        other = (0, _objectWithoutProperties3.default)(_props, ['className', 'resizable']);
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      { className: theme.txt },
      this.renderLabel(),
      _react2.default.createElement(_Core2.default, (0, _extends3.default)({}, other, {
        className: (0, _classnames2.default)(theme.input, (_classNames = {}, _classNames[theme.resizable] = resizable, _classNames), className),
        ref: function ref(_ref) {
          if (_ref && _ref.input) {
            _this2.input = _ref.input;
          }
        }
      }))
    );
  };

  return TextArea;
}(_ThemedComponent3.default);

TextArea.Core = _Core2.default;
TextArea.propTypes = {
  autoComplete: _react.PropTypes.oneOf(['on', 'off']),
  autoFocus: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  isFocused: _react.PropTypes.bool,
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
  resizable: _react.PropTypes.bool,
  tabIndex: _react.PropTypes.number,
  testId: _react.PropTypes.string,
  value: _react.PropTypes.string
};
TextArea.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  resizable: false,
  type: 'text'
};
exports.default = TextArea;