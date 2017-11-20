"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _ThemedComponent2 = require("../ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderItem = function (_ThemedComponent) {
  (0, _inherits3.default)(HeaderItem, _ThemedComponent);

  function HeaderItem(props, context) {
    (0, _classCallCheck3.default)(this, HeaderItem);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Menu",
      styles: _styles2.default
    }));
  }

  HeaderItem.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        icon = _props.icon,
        otherProps = (0, _objectWithoutProperties3.default)(_props, ["children", "className", "icon"]);
    var theme = this.theme;


    return _react2.default.createElement(
      _Item2.default,
      (0, _extends3.default)({
        className: (0, _classnames2.default)(theme.header_item, className),
        isCheckable: false
      }, otherProps),
      icon && _react2.default.createElement(
        "div",
        { className: theme.header_icon },
        icon
      ),
      children
    );
  };

  return HeaderItem;
}(_ThemedComponent3.default);

HeaderItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  icon: _propTypes2.default.element
};
exports.default = HeaderItem;