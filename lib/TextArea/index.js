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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
        { className: theme.label, htmlFor: _this.getId() },
        label
      );
    };

    _this.generatedId = _uuid2.default.v4();
    return _this;
  }

  TextArea.prototype.render = function render() {
    var _classNames,
        _classNames2,
        _this2 = this;

    var _props = this.props,
        className = _props.className,
        disabled = _props.disabled,
        hint = _props.hint,
        resizable = _props.resizable,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        validation = _props.validation,
        other = (0, _objectWithoutProperties3.default)(_props, ['className', 'disabled', 'hint', 'resizable', 'title', 'tooltipPositioning', 'validation']);
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.txt, theme[validation], (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames)),
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      this.renderLabel(),
      _react2.default.createElement(_Core2.default, (0, _extends3.default)({}, other, {
        disabled: disabled,
        className: (0, _classnames2.default)(theme.input, (_classNames2 = {}, _classNames2[theme.resizable] = resizable, _classNames2), className),
        id: this.getId(),
        ref: function ref(_ref) {
          if (_ref && _ref.input) {
            _this2.input = _ref.input;
          }
        }
      })),
      hint && _react2.default.createElement(
        'small',
        { className: theme.hint },
        hint
      )
    );
  };

  return TextArea;
}(_ThemedComponent3.default);

TextArea.Core = _Core2.default;
TextArea.propTypes = {
  autoComplete: _propTypes2.default.oneOf(['on', 'off']),
  autoFocus: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  isFocused: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(['ltr', 'rtl']),
  disabled: _propTypes2.default.bool.isRequired,
  hint: _propTypes2.default.node,
  id: _propTypes2.default.string,
  label: _propTypes2.default.node,
  name: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  onArrowDown: _propTypes2.default.func,
  onArrowLeft: _propTypes2.default.func,
  onArrowRight: _propTypes2.default.func,
  onArrowUp: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChangeText: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onEscape: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  resizable: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  validation: _propTypes2.default.oneOf(['error', 'warning', 'success']),
  value: _propTypes2.default.string
};
TextArea.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  resizable: false,
  type: 'text'
};
exports.default = TextArea;