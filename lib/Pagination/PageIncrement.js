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

var _Selectable = require("../core/Selectable");

var _Selectable2 = _interopRequireDefault(_Selectable);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageIncrement = function (_ThemedComponent) {
  (0, _inherits3.default)(PageIncrement, _ThemedComponent);

  function PageIncrement(props, context) {
    (0, _classCallCheck3.default)(this, PageIncrement);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: _styles2.default
    }));
  }

  PageIncrement.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        selectedByMouse = _props.selectedByMouse,
        selected = _props.selected,
        disabled = _props.disabled,
        value = _props.value,
        description = _props.description,
        onSelection = _props.onSelection;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.page, (_classNames = {}, _classNames[theme.page_previous] = value === "previous", _classNames[theme.page_next] = value === "next", _classNames[theme.is_hidden] = disabled, _classNames[theme.is_focused] = !selectedByMouse && selected, _classNames)),
        "aria-hidden": disabled,
        "aria-disabled": disabled,
        "aria-label": description,
        onClick: onSelection
      },
      description
    );
  };

  return PageIncrement;
}(_ThemedComponent3.default);

PageIncrement.propTypes = {
  value: _propTypes2.default.oneOf(["previous", "next"]).isRequired,
  description: _propTypes2.default.string.isRequired,
  onSelection: _propTypes2.default.func.isRequired
};
exports.default = (0, _Selectable2.default)(PageIncrement, {
  selectEvent: "onClick"
});