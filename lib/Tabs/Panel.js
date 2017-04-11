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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _View = require('../core/View');

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function (_ThemedComponent) {
  (0, _inherits3.default)(Panel, _ThemedComponent);

  function Panel(props, context) {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: 'Tabs',
      styles: _styles2.default
    }));
  }

  Panel.prototype.render = function render() {
    var children = this.props.children;
    var theme = this.theme;


    return _react2.default.createElement(
      _View2.default,
      { className: theme.panel, role: 'tabpanel' },
      children
    );
  };

  return Panel;
}(_ThemedComponent3.default);

Panel.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string.isRequired
};
exports.default = Panel;