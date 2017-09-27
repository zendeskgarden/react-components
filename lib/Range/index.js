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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function (_ThemedComponent) {
  (0, _inherits3.default)(Range, _ThemedComponent);

  function Range(props, context) {
    (0, _classCallCheck3.default)(this, Range);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Range",
      styles: _styles2.default
    }));

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;


      onChange && onChange(parseFloat(event.target.value), event);

      _this.setState({ bgWidth: _this.getBgWidth() });
    };

    _this.renderLabel = function () {
      var label = _this.props.label;
      var theme = _this.theme;


      if (!label) {
        return null;
      }

      return _react2.default.createElement(
        "label",
        { className: theme.label, htmlFor: _this.getId() },
        label
      );
    };

    _this.generatedId = _uuid2.default.v4();
    _this.state = {
      focused: false,
      bgWidth: 0
    };
    return _this;
  }

  Range.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      bgWidth: this.getBgWidth()
    });
  };

  Range.prototype.getBgWidth = function getBgWidth() {
    var _props = this.props,
        max = _props.max,
        min = _props.min;
    var value = this.input.value;


    if (parseFloat(max) < parseFloat(min)) {
      max = 100;
    }

    return 100 * (value - min) / (max - min);
  };

  Range.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        defaultValue = _props2.defaultValue,
        disabled = _props2.disabled,
        hint = _props2.hint,
        max = _props2.max,
        min = _props2.min,
        size = _props2.size,
        step = _props2.step,
        tabIndex = _props2.tabIndex,
        testId = _props2.testId,
        title = _props2.title,
        value = _props2.value,
        validation = _props2.validation,
        validationText = _props2.validationText;
    var _state = this.state,
        focused = _state.focused,
        bgWidth = _state.bgWidth;
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.range, theme["size_" + size], theme[validation], (_classNames = {}, _classNames[theme.focused] = focused, _classNames), className)
      },
      this.renderLabel(),
      hint && _react2.default.createElement(
        "small",
        { className: theme.hint },
        hint
      ),
      _react2.default.createElement("input", {
        className: theme.input,
        "data-test-id": testId,
        defaultValue: defaultValue,
        disabled: disabled,
        id: this.getId(),
        max: max,
        min: min,
        onBlur: function onBlur() {
          return _this2.setState({ focused: false });
        },
        onClick: this.onChange,
        onChange: this.onChange,
        onFocus: function onFocus() {
          return _this2.setState({ focused: true });
        },
        step: step,
        style: { backgroundSize: bgWidth + "%" },
        tabIndex: tabIndex,
        type: "range",
        title: title,
        value: value,
        ref: function ref(_ref) {
          _this2.input = _ref;
        }
      }),
      validation && validationText && _react2.default.createElement(
        "small",
        { className: theme.message },
        validationText
      )
    );
  };

  return Range;
}(_ThemedComponent3.default);

Range.propTypes = {
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  hint: _propTypes2.default.node,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(["small", "medium"]),
  step: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  value: _propTypes2.default.number,
  validation: _propTypes2.default.oneOf(["error", "warning", "success"]),
  validationText: _propTypes2.default.string
};
Range.defaultProps = {
  min: 0,
  max: 100,
  size: "medium",
  step: 1
};
exports.default = Range;