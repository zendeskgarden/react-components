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

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = function (_Component) {
  (0, _inherits3.default)(Anchor, _Component);

  function Anchor(props) {
    (0, _classCallCheck3.default)(this, Anchor);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.onMouseDown = function () {
      _this.mouseInitiated = true;

      setTimeout(function () {
        _this.mouseInitiated = false;
      }, 0);
    };

    _this.onFocus = function (event) {
      var onFocus = _this.props.onFocus;

      onFocus && onFocus(event);

      if (_this.mouseInitiated) {
        return;
      }

      _this.setState({
        isFocused: true
      });
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;

      onBlur && onBlur(event);

      _this.setState({
        isFocused: false
      });
    };

    _this.onClick = function (event) {
      var onClick = _this.props.onClick;

      onClick && onClick(event);

      _this.setState({
        isFocused: false
      });
    };

    _this.state = {
      isFocused: false
    };

    _this.mouseInitiated = false;
    return _this;
  }

  Anchor.prototype.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;


    if (autoFocus) {
      this.anchorElement.focus();
    }
  };

  /**
   * Necessary to not show focus styling when focused by mouse
   */


  Anchor.prototype.render = function render() {
    var _classNames,
        _this2 = this,
        _classNames2;

    var _props = this.props,
        className = _props.className,
        disabled = _props.disabled,
        tabIndex = _props.tabIndex,
        children = _props.children,
        onClick = _props.onClick,
        testId = _props.testId,
        anchorProps = (0, _objectWithoutProperties3.default)(_props, ["className", "disabled", "tabIndex", "children", "onClick", "testId"]);
    var isFocused = this.state.isFocused;


    return _react2.default.createElement(
      _View2.default,
      {
        className: _styles2.default.container,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        testId: testId,
        onMouseDown: this.onMouseDown
      },
      onClick ? _react2.default.createElement(
        "button",
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, _styles2.default.anchor, (_classNames = {}, _classNames[_styles2.default.focused] = isFocused, _classNames[_styles2.default.disabled] = disabled, _classNames)),
          ref: function ref(_ref) {
            _this2.anchorElement = _ref;
          },
          onClick: onClick,
          tabIndex: tabIndex,
          disabled: disabled
        }, anchorProps),
        children
      ) : _react2.default.createElement(
        "a",
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, _styles2.default.anchor, (_classNames2 = {}, _classNames2[_styles2.default.focused] = isFocused, _classNames2)),
          ref: function ref(_ref2) {
            _this2.anchorElement = _ref2;
          },
          tabIndex: tabIndex
        }, anchorProps),
        children
      )
    );
  };

  return Anchor;
}(_react.Component);

Anchor.propTypes = {
  autoFocus: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  /**
   * Whether to disable the Anchor. Only valid if onClick is provided.
   */
  disabled: function disabled(_ref3) {
    var _disabled = _ref3.disabled,
        onClick = _ref3.onClick;

    if (_disabled && typeof onClick === "undefined") {
      throw new Error("onClick must be provided for a disabled state to be used.");
    }
  },
  tabIndex: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired,
  testId: _propTypes2.default.string
};
Anchor.defaultProps = {
  tabIndex: 0
};
exports.default = Anchor;