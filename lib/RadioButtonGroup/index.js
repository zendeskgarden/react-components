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

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonGroup = function (_Component) {
  (0, _inherits3.default)(RadioButtonGroup, _Component);

  function RadioButtonGroup(props, context) {
    (0, _classCallCheck3.default)(this, RadioButtonGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.onChange = function (value, event) {
      var onChange = _this.props.onChange;


      onChange && onChange(value, event);
    };

    _this.keyboard = true;
    _this.id = _uuid2.default.v4();
    return _this;
  }

  RadioButtonGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        dir = _props.dir,
        disabled = _props.disabled,
        muted = _props.muted,
        selected = _props.selected,
        className = _props.className;


    var radios = _react2.default.Children.map(children, function (item, index) {
      return _react2.default.cloneElement(item, {
        disabled: "disabled" in item.props ? item.props.disabled : disabled,
        checked: selected === item.props.value,
        dir: dir,
        key: "radio-" + index,
        name: _this2.id,
        muted: "muted" in item.props ? item.props.muted : muted,
        onChange: _this2.onChange
      });
    });

    return _react2.default.createElement(
      _View2.default,
      { className: className },
      radios
    );
  };

  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  disabled: _propTypes2.default.bool,
  muted: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  selected: _propTypes2.default.any
};
RadioButtonGroup.defaultProps = {
  dir: "ltr"
};
exports.default = RadioButtonGroup;