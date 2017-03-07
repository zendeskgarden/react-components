'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ellipsis = function (_Component) {
  (0, _inherits3.default)(Ellipsis, _Component);

  function Ellipsis() {
    (0, _classCallCheck3.default)(this, Ellipsis);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Ellipsis.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        title = _props.title;


    var props = { className: _styles2.default.ellipsis };

    if ('title' in this.props) {
      props.title = title;
    } else if (typeof children === 'string') {
      props.title = children;
    }

    return _react2.default.createElement(
      _View2.default,
      props,
      children
    );
  };

  return Ellipsis;
}(_react.Component);

Ellipsis.propTypes = {
  children: _react.PropTypes.node,
  title: _react.PropTypes.string
};
exports.default = Ellipsis;