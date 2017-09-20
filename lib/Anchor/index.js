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

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchor = function (_ThemedComponent) {
  (0, _inherits3.default)(Anchor, _ThemedComponent);

  function Anchor(props, context) {
    (0, _classCallCheck3.default)(this, Anchor);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Anchor",
      styles: _styles2.default
    }));

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
        _this2 = this;

    var theme = this.theme;
    var _props = this.props,
        className = _props.className,
        tabIndex = _props.tabIndex,
        children = _props.children,
        testId = _props.testId,
        anchorProps = (0, _objectWithoutProperties3.default)(_props, ["className", "tabIndex", "children", "testId"]);
    var isFocused = this.state.isFocused;


    return _react2.default.createElement(
      _View2.default,
      {
        className: theme.container,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        testId: testId,
        onMouseDown: this.onMouseDown
      },
      _react2.default.createElement(
        "a",
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, theme.anchor, (_classNames = {}, _classNames[theme.focused] = isFocused, _classNames)),
          ref: function ref(_ref) {
            _this2.anchorElement = _ref;
          },
          tabIndex: tabIndex
        }, anchorProps),
        children
      )
    );
  };

  return Anchor;
}(_ThemedComponent3.default);

Anchor.propTypes = {
  autoFocus: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired,
  testId: _propTypes2.default.string
};
Anchor.defaultProps = {
  tabIndex: 0
};
exports.default = Anchor;