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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Callouts = function (_Component) {
  (0, _inherits3.default)(Callouts, _Component);

  function Callouts(props, context) {
    (0, _classCallCheck3.default)(this, Callouts);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context, {
      namespace: "Callout"
    }));

    _this.state = {};
    return _this;
  }

  Callouts.prototype.getChildContext = function getChildContext() {
    return { floating: this.props.floating };
  };

  Callouts.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        testId = _props.testId,
        floating = _props.floating,
        dir = _props.dir,
        children = _props.children,
        className = _props.className,
        zIndex = _props.zIndex;


    var props = {};
    if (testId) {
      props["data-test-id"] = testId;
    }

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: (0, _classnames2.default)(_styles2.default.callouts, (_classNames = {}, _classNames[_styles2.default.floating] = floating, _classNames[_styles2.default.rtl] = dir === "rtl", _classNames), className),
        style: { zIndex: zIndex }
      }, props),
      children
    );
  };

  return Callouts;
}(_react.Component);

Callouts.propTypes = {
  children: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  testId: _propTypes2.default.string,
  floating: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  zIndex: _propTypes2.default.number
};
Callouts.defaultProps = {
  dir: "ltr",
  floating: false,
  zIndex: 700
};
Callouts.childContextTypes = {
  floating: _propTypes2.default.bool
};
exports.default = Callouts;