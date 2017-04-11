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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_Component) {
  (0, _inherits3.default)(Text, _Component);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Text.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        onClick = _props.onClick,
        tabIndex = _props.tabIndex,
        testId = _props.testId,
        title = _props.title,
        others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'onClick', 'tabIndex', 'testId', 'title']);


    return _react2.default.createElement(
      _View2.default,
      (0, _extends3.default)({
        className: (0, _classnames2.default)(className, _styles2.default.container),
        testId: testId,
        onClick: onClick,
        tabIndex: tabIndex,
        title: title
      }, others),
      children
    );
  };

  return Text;
}(_react.Component);

Text.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number,
  testId: _propTypes2.default.string,
  title: _propTypes2.default.string
};
exports.default = Text;