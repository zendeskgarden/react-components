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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Range = function (_ThemedComponent) {
  (0, _inherits3.default)(Range, _ThemedComponent);

  function Range(props, context) {
    (0, _classCallCheck3.default)(this, Range);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'Range',
      styles: _styles2.default
    }));

    _this.getId = function () {
      return _this.props.id || _this.generatedId;
    };

    _this.onChange = function (e) {
      var onChange = _this.props.onChange;


      onChange && onChange(parseFloat(e.target.value));

      _this.setState({ bgWidth: _this.getBgWidth() });
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
        defaultValue = _props2.defaultValue,
        disabled = _props2.disabled,
        max = _props2.max,
        min = _props2.min,
        step = _props2.step,
        tabIndex = _props2.tabIndex,
        testId = _props2.testId,
        title = _props2.title,
        value = _props2.value;
    var _state = this.state,
        focused = _state.focused,
        bgWidth = _state.bgWidth;
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      { className: (0, _classnames2.default)(theme.range, (_classNames = {}, _classNames[theme.focused] = focused, _classNames)) },
      this.renderLabel(),
      _react2.default.createElement('input', {
        className: theme.input,
        'data-test-id': testId,
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
        style: { backgroundSize: bgWidth + '%' },
        tabIndex: tabIndex,
        type: 'range',
        title: title,
        value: value,
        ref: function ref(_ref) {
          _this2.input = _ref;
        }
      })
    );
  };

  return Range;
}(_ThemedComponent3.default);

Range.propTypes = {
  id: _react.PropTypes.string,
  label: _react.PropTypes.string,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  value: _react.PropTypes.number,
  step: _react.PropTypes.number,
  defaultValue: _react.PropTypes.number,
  disabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  testId: _react.PropTypes.string,
  tabIndex: _react.PropTypes.number,
  title: _react.PropTypes.string
};
Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};
exports.default = Range;