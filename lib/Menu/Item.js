"use strict";

exports.__esModule = true;
exports.Item = undefined;

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

var _ThemedComponent2 = require("../ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _Selectable = require("../core/Selectable");

var _Selectable2 = _interopRequireDefault(_Selectable);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function (_ThemedComponent) {
  (0, _inherits3.default)(Item, _ThemedComponent);

  function Item(props, context) {
    (0, _classCallCheck3.default)(this, Item);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Menu",
      styles: _styles2.default
    }));

    _this.state = {
      temporarilyChecked: false
    };
    return _this;
  }

  Item.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        disabled = _props.disabled,
        _onMouseDown = _props.onMouseDown,
        onMouseEnter = _props.onMouseEnter,
        _onMouseLeave = _props.onMouseLeave,
        onClick = _props.onClick,
        role = _props.role,
        selected = _props.selected,
        testId = _props.testId,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        checked = _props.checked,
        metaInformation = _props.metaInformation,
        isCheckable = _props.isCheckable;
    var theme = this.theme;
    var temporarilyChecked = this.state.temporarilyChecked;


    var accessibilityProps = {
      "aria-activedescendant": selected,
      "aria-disabled": disabled
    };

    if (isCheckable) {
      accessibilityProps["aria-checked"] = checked;
    }

    return _react2.default.createElement(
      _View2.default,
      (0, _extends3.default)({}, accessibilityProps, {
        className: (0, _classnames2.default)(theme.item, className, (_classNames = {}, _classNames[theme.disabled] = disabled, _classNames[theme.focused] = selected, _classNames[theme.checked] = checked || isCheckable && !disabled && temporarilyChecked, _classNames)),
        disabled: disabled,
        onMouseDown: function onMouseDown(event) {
          _this2.setState({ temporarilyChecked: true }, function () {
            _onMouseDown && _onMouseDown(event);
          });
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: function onMouseLeave(event) {
          _this2.setState({ temporarilyChecked: false }, function () {
            _onMouseLeave && _onMouseLeave(event);
          });
        },
        onClick: onClick,
        role: role,
        testId: testId,
        title: title,
        tooltipPositioning: tooltipPositioning
      }),
      children,
      metaInformation && _react2.default.createElement(
        "div",
        { className: theme.meta },
        metaInformation
      )
    );
  };

  return Item;
}(_ThemedComponent3.default);

Item.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onMouseDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  role: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  testId: _propTypes2.default.string,
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {},
  checked: _propTypes2.default.bool,
  metaInformation: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  isCheckable: _propTypes2.default.bool
};
Item.defaultProps = {
  disabled: false,
  role: "menuitem",
  checked: false,
  isCheckable: true
};
exports.default = (0, _Selectable2.default)(Item, {
  action: function action(props, event) {
    var onClick = props.onClick,
        value = props.value;

    onClick && onClick(value, event);
  },
  preventDefault: true,
  selectEvent: "onClick"
});