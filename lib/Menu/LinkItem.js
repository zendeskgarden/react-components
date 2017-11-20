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

var _ThemedComponent2 = require("../ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _Selectable = require("../core/Selectable");

var _Selectable2 = _interopRequireDefault(_Selectable);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkItem = function (_ThemedComponent) {
  (0, _inherits3.default)(LinkItem, _ThemedComponent);

  function LinkItem(props, context) {
    (0, _classCallCheck3.default)(this, LinkItem);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Menu",
      styles: _styles2.default
    }));
  }

  LinkItem.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onClick = _props.onClick,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId,
        href = _props.href,
        target = _props.target,
        className = _props.className;
    var theme = this.theme;


    return _react2.default.createElement(
      "a",
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        className: (0, _classnames2.default)(theme.item, className, (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.selected] = selected, _classNames)),
        disabled: disabled,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick,
        role: role,
        "data-test-id": testId,
        href: href,
        target: target
      },
      children
    );
  };

  return LinkItem;
}(_ThemedComponent3.default);

LinkItem.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onMouseDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  role: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  testId: _propTypes2.default.string,
  href: _propTypes2.default.string.isRequired,
  target: _propTypes2.default.oneOf(["_self", "_blank", "_parent", "_top"])
};
LinkItem.defaultProps = {
  disabled: false,
  role: "menuitem",
  target: "_self"
};
exports.default = (0, _Selectable2.default)(LinkItem, {
  action: function action(props, event) {
    var href = props.href,
        target = props.target;

    var openInNewWindow = event.ctrlKey || event.metaKey;

    var newWindow = window.open(href, openInNewWindow ? "_blank" : target);
    newWindow.opener = null;
  },
  selectEvent: "onClick",
  preventDefault: true
});