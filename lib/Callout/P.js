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

var _styles = require("./styles.css");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P = function (_PureComponent) {
  (0, _inherits3.default)(P, _PureComponent);

  function P(props, context) {
    (0, _classCallCheck3.default)(this, P);
    return (0, _possibleConstructorReturn3.default)(this, _PureComponent.call(this, props, context, {
      namespace: "Callout"
    }));
  }

  P.prototype.render = function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      "p",
      { className: _styles2.default.paragraph },
      children
    );
  };

  return P;
}(_react.PureComponent);

P.propTypes = {
  children: _propTypes2.default.node.isRequired
};
exports.default = P;