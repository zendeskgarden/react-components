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

var Page = function (_ThemedComponent) {
  (0, _inherits3.default)(Page, _ThemedComponent);

  function Page(props, context) {
    (0, _classCallCheck3.default)(this, Page);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: _styles2.default
    }));
  }

  Page.prototype.render = function render() {
    var _classNames;

    var theme = this.theme;
    var _props = this.props,
        isCurrent = _props.isCurrent,
        isAnimated = _props.isAnimated,
        ariaLabel = _props.ariaLabel,
        onSelection = _props.onSelection,
        selectedByMouse = _props.selectedByMouse,
        selected = _props.selected;


    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(theme.page, (_classNames = {}, _classNames[theme.is_current] = isCurrent, _classNames[theme.is_focused] = !selectedByMouse && selected, _classNames[theme.no_animation] = !isAnimated, _classNames)),
        "aria-label": ariaLabel,
        "aria-current": isCurrent,
        onClick: onSelection
      },
      this.props.children
    );
  };

  return Page;
}(_ThemedComponent3.default);

Page.propTypes = {
  /**
   * If the page is currently selected.
   */
  isCurrent: _propTypes2.default.bool,
  /**
   * If the page allows animation.
   */
  isAnimated: _propTypes2.default.bool,
  /**
   * Callback when the page is selected.
   */
  onSelection: _propTypes2.default.func.isRequired,
  /**
   * The label to apply to the page element.
   */
  ariaLabel: _propTypes2.default.string.isRequired
};
Page.defaultProps = {
  isCurrent: false,
  isFocused: false,
  isAnimated: false,
  selected: false
};
exports.default = (0, _Selectable2.default)(Page, {
  selectEvent: "onClick"
});