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

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _Selectable = require("../core/Selectable");

var _Selectable2 = _interopRequireDefault(_Selectable);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning;


    return _react2.default.createElement(
      _View2.default,
      {
        "aria-activedescendant": selected,
        "aria-disabled": disabled,
        className: (0, _classnames2.default)(_styles2.default.item, (_classNames = {}, _classNames[_styles2.default.disabled] = disabled, _classNames[_styles2.default.focused] = selected, _classNames)),
        disabled: disabled,
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        role: role,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      },
      children
    );
  };

  return Item;
}(_react.Component);

Item.propTypes = {
  children: _propTypes2.default.node.isRequired,
  disabled: _propTypes2.default.bool,
  onMouseDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  role: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  testId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
Item.defaultProps = {
  disabled: false,
  role: "menuitem"
};
exports.default = (0, _Selectable2.default)(Item, {
  action: function action(props, event) {
    var onSelect = props.onSelect,
        value = props.value;


    onSelect && onSelect(value);
  },
  preventDefault: true
});