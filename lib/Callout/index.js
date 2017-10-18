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

var _P = require("./P");

var _P2 = _interopRequireDefault(_P);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Callout = function (_ThemedComponent) {
  (0, _inherits3.default)(Callout, _ThemedComponent);

  function Callout(props, context) {
    (0, _classCallCheck3.default)(this, Callout);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Callout",
      styles: _styles2.default
    }));

    _this.renderClose = function (onClose) {
      var theme = _this.theme;
      var tabIndex = _this.props.tabIndex;


      return _react2.default.createElement("button", { tabIndex: tabIndex, className: theme.remove, onClick: onClose });
    };

    return _this;
  }

  Callout.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        dir = _props.dir,
        onClose = _props.onClose,
        type = _props.type,
        title = _props.title,
        floating = _props.floating;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme[type], (_classNames = {}, _classNames[theme.rtl] = dir === "rtl", _classNames[theme.floating] = floating, _classNames), className)
      },
      title && _react2.default.createElement(
        "strong",
        { className: theme.title },
        title
      ),
      children,
      onClose && this.renderClose(onClose)
    );
  };

  return Callout;
}(_ThemedComponent3.default);

Callout.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  onClose: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number,
  title: _propTypes2.default.string,
  floating: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(["default", "success", "warning", "error"])
};
Callout.defaultProps = {
  dir: "ltr",
  type: "default",
  tabIndex: 0,
  floating: false
};
Callout.P = _P2.default;
exports.default = Callout;