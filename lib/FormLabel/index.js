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

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormLabel = function (_ThemedComponent) {
  (0, _inherits3.default)(FormLabel, _ThemedComponent);

  function FormLabel(props, context) {
    (0, _classCallCheck3.default)(this, FormLabel);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "FormLabel",
      styles: _styles2.default
    }));
  }

  FormLabel.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        htmlFor = _props.htmlFor,
        className = _props.className;
    var theme = this.theme;


    return _react2.default.createElement(
      "label",
      { htmlFor: htmlFor, className: (0, _classnames2.default)(theme.label, className) },
      children
    );
  };

  return FormLabel;
}(_ThemedComponent3.default);

FormLabel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  htmlFor: _propTypes2.default.string
};
exports.default = FormLabel;