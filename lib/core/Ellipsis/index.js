'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ellipsis = function (_Component) {
  (0, _inherits3.default)(Ellipsis, _Component);

  function Ellipsis(props) {
    (0, _classCallCheck3.default)(this, Ellipsis);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.analyzeOverflow = function () {
      // setTimeout before reading the DOM element's dimensions:
      // In some cases, they may not be ready in the current stack.
      setTimeout(function () {
        if (!_this.refs.main) {
          return null;
        }

        var _this$refs$main$eleme = _this.refs.main.element,
            offsetWidth = _this$refs$main$eleme.offsetWidth,
            scrollWidth = _this$refs$main$eleme.scrollWidth;

        var isOverflowing = offsetWidth < scrollWidth;

        if (isOverflowing !== _this.state.isOverflowing) {
          _this.setState({ isOverflowing: isOverflowing });
        }
      }, 0);
    };

    _this.onWindowResize = function (e) {
      _this.analyzeOverflow();
    };

    _this.state = {};
    return _this;
  }

  Ellipsis.prototype.componentDidMount = function componentDidMount() {
    this.analyzeOverflow();

    window.addEventListener('resize', this.onWindowResize);
  };

  Ellipsis.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  };

  Ellipsis.prototype.componentDidUpdate = function componentDidUpdate() {
    this.analyzeOverflow();
  };

  Ellipsis.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        title = _props.title;


    var props = { className: _styles2.default.ellipsis };

    if ('title' in this.props) {
      props.title = title;
    } else if (typeof children === 'string' && this.state.isOverflowing) {
      props.title = children;
    }

    /*
      <div />
      Prevent Safari quirk that causes native tooltips to show along-side our tooltips:
      http://stackoverflow.com/a/42023502
    */
    return _react2.default.createElement(
      _View2.default,
      (0, _extends3.default)({ ref: 'main' }, props),
      _react2.default.createElement('div', null),
      children
    );
  };

  return Ellipsis;
}(_react.Component);

Ellipsis.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.string
};
exports.default = Ellipsis;