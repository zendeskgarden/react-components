"use strict";

exports.__esModule = true;

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

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = function (_ThemedComponent) {
  (0, _inherits3.default)(RadioButton, _ThemedComponent);

  function RadioButton(props, context) {
    (0, _classCallCheck3.default)(this, RadioButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "RadioButton",
      styles: _styles2.default
    }));

    _this.onChange = function (event) {
      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;


      onChange && onChange(value, event);
    };

    _this.generatedId = _uuid2.default.v4();
    _this.keyboard = true;
    _this.state = {
      focused: false
    };
    return _this;
  }

  RadioButton.prototype.render = function render() {
    var _classNames,
        _this2 = this,
        _classNames2;

    var _props = this.props,
        checked = _props.checked,
        children = _props.children,
        className = _props.className,
        defaultChecked = _props.defaultChecked,
        dir = _props.dir,
        disabled = _props.disabled,
        hint = _props.hint,
        id = _props.id,
        muted = _props.muted,
        name = _props.name,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        validation = _props.validation,
        validationText = _props.validationText;
    var focused = this.state.focused;
    var theme = this.theme;


    var idAttribute = id || this.generatedId;

    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.checkbox, theme.radio, theme[validation], (_classNames = {}, _classNames[theme.focused] = focused, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.disabled] = disabled, _classNames[theme.noLabel] = !children, _classNames), className),
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      _react2.default.createElement("input", {
        checked: checked,
        className: theme.input,
        "data-test-id": testId,
        defaultChecked: defaultChecked,
        disabled: disabled,
        id: idAttribute,
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
        type: "radio"
      }),
      _react2.default.createElement(
        "label",
        {
          className: (0, _classnames2.default)(theme.label, (_classNames2 = {}, _classNames2[theme.muted] = muted, _classNames2)),
          dir: dir,
          htmlFor: idAttribute,
          onMouseUp: function onMouseUp() {
            _this2.keyboard = false;
          }
        },
        children
      ),
      hint && _react2.default.createElement(
        "small",
        { className: _styles2.default.hint },
        hint
      ),
      validation && validationText && _react2.default.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return RadioButton;
}(_ThemedComponent3.default);

RadioButton.propTypes = {
  checked: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  disabled: _propTypes2.default.bool,
  hint: _propTypes2.default.node,
  id: _propTypes2.default.string,
  muted: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  /** Must be wrapped by a <a href="#tooltipprovider">TooltipProvider</a> */
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> for positioning options */
  tooltipPositioning: function tooltipPositioning() {},
  value: _propTypes2.default.any,
  validation: _propTypes2.default.oneOf(["error", "warning", "success"]),
  validationText: _propTypes2.default.string
};
RadioButton.defaultProps = {
  dir: "ltr"
};
exports.default = RadioButton;