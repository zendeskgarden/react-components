'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasAnyHandlers = function hasAnyHandlers(handlers) {
  return (0, _keys2.default)(handlers).some(function (key) {
    return handlers[key];
  });
};

var View = function (_Component) {
  (0, _inherits3.default)(View, _Component);

  function View() {
    (0, _classCallCheck3.default)(this, View);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  View.prototype.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;


    if (autoFocus) {
      this.element.focus();
    }
  };

  View.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        className = _props.className,
        hidden = _props.hidden,
        onArrowDown = _props.onArrowDown,
        onArrowLeft = _props.onArrowLeft,
        onArrowRight = _props.onArrowRight,
        onArrowUp = _props.onArrowUp,
        onDelete = _props.onDelete,
        onEnter = _props.onEnter,
        onEscape = _props.onEscape,
        onKeyDown = _props.onKeyDown,
        onSpace = _props.onSpace,
        onTab = _props.onTab,
        title = _props.title,
        tooltipPositioning = _props.tooltipPositioning,
        testId = _props.testId,
        other = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'hidden', 'onArrowDown', 'onArrowLeft', 'onArrowRight', 'onArrowUp', 'onDelete', 'onEnter', 'onEscape', 'onKeyDown', 'onSpace', 'onTab', 'title', 'tooltipPositioning', 'testId']);


    var keyDownHandlers = {
      '8': onDelete,
      '9': onTab,
      '13': onEnter,
      '27': onEscape,
      '32': onSpace,
      '37': onArrowLeft,
      '38': onArrowUp,
      '39': onArrowRight,
      '40': onArrowDown
    };

    var eventHandlers = {};

    if (onKeyDown || hasAnyHandlers(keyDownHandlers)) {
      eventHandlers.onKeyDown = function (e) {
        var handler = keyDownHandlers[e.keyCode];
        handler && handler(e);
        onKeyDown && onKeyDown(e);
      };
    }

    var props = (0, _extends3.default)({}, other, eventHandlers);

    var tooltips = this.context.tooltips;


    if (tooltips && title) {
      props.onMouseOver = function (e) {
        tooltips.show(_this2.element, title, tooltipPositioning);
        _this2.props.onMouseOver && _this2.props.onMouseOver(e);
      };['onMouseOut', 'onBlur', 'onWheel'].forEach(function (handler) {
        props[handler] = function (e) {
          tooltips.hide();
          _this2.props[handler] && _this2.props[handler](e);
        };
      });

      props['aria-label'] = title;
    } else if (title) {
      props.title = title;
    }

    if (testId) {
      props['data-test-id'] = testId;
    }

    if (hidden) {
      props['aria-hidden'] = true;
    }

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, props, {
        className: (0, _classnames2.default)(_styles2.default.view, className),
        ref: function ref(_ref) {
          _this2.element = _ref;
        }
      }),
      children
    );
  };

  return View;
}(_react.Component);

View.propTypes = {
  autoFocus: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  dir: _react.PropTypes.oneOf(['ltr', 'rtl']),
  hidden: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onDragEnter: _react.PropTypes.func,
  onDragLeave: _react.PropTypes.func,
  onDragOver: _react.PropTypes.func,
  onDragStart: _react.PropTypes.func,
  onDrop: _react.PropTypes.func,
  onArrowDown: _react.PropTypes.func,
  onArrowLeft: _react.PropTypes.func,
  onArrowRight: _react.PropTypes.func,
  onArrowUp: _react.PropTypes.func,
  onBackspace: _react.PropTypes.func,
  onDelete: _react.PropTypes.func,
  onEnter: _react.PropTypes.func,
  onEscape: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onScroll: _react.PropTypes.func,
  onSpace: _react.PropTypes.func,
  onTab: _react.PropTypes.func,
  testId: _react.PropTypes.string,
  title: _react.PropTypes.string,
  /** One of: 'top', 'right', 'bottom', 'left' or as array (prioritization) */
  tooltipPositioning: function tooltipPositioning() {}
};
View.contextTypes = {
  tooltips: _react.PropTypes.object
};
exports.default = View;