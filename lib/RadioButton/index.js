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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function (_ThemedComponent) {
  (0, _inherits3.default)(RadioButton, _ThemedComponent);

  function RadioButton(props, context) {
    (0, _classCallCheck3.default)(this, RadioButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'RadioButton',
      styles: _styles2.default
    }));

    _this.onChange = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;


      onChange && onChange(value);
    };

    _this.id = _uuid2.default.v4();
    _this.keyboard = true;
    _this.state = {
      focused: false
    };
    return _this;
  }

  RadioButton.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        checked = _props.checked,
        children = _props.children,
        defaultChecked = _props.defaultChecked,
        dir = _props.dir,
        disabled = _props.disabled,
        name = _props.name,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;
    var focused = this.state.focused;
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.checkbox, theme.radio, (_classNames = {}, _classNames[theme.focused] = focused, _classNames[theme.rtl] = dir === 'rtl', _classNames)),
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      _react2.default.createElement('input', {
        checked: checked,
        className: theme.input,
        'data-test-id': testId,
        defaultChecked: defaultChecked,
        disabled: disabled,
        id: this.id,
        name: name,
        ref: function ref(_ref) {
          _this2.input = _ref;
        },
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onChange: this.onChange,
        onFocus: function onFocus() {
          _this2.setState({ focused: _this2.keyboard });
          _this2.keyboard = true;
        },
        tabIndex: tabIndex,
        type: 'radio'
      }),
      _react2.default.createElement(
        'label',
        {
          className: theme.label,
          dir: dir,
          htmlFor: this.id,
          onMouseUp: function onMouseUp() {
            _this2.keyboard = false;
          }
        },
        children
      )
    );
  };

  return RadioButton;
}(_ThemedComponent3.default);

RadioButton.propTypes = {
  checked: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  defaultChecked: _react.PropTypes.bool,
  dir: _react.PropTypes.oneOf(['ltr', 'rtl']),
  disabled: _react.PropTypes.bool,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  tabIndex: _react.PropTypes.number,
  testId: _react.PropTypes.string,
  title: _react.PropTypes.string,
  /** <a href="#View">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  value: _react.PropTypes.any
};
RadioButton.defaultProps = {
  dir: 'ltr'
};
exports.default = RadioButton;