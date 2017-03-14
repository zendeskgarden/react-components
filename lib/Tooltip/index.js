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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _ThemedComponent2 = require('../utils/theming/ThemedComponent');

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function (_ThemedComponent) {
  (0, _inherits3.default)(Tooltip, _ThemedComponent);

  function Tooltip() {
    (0, _classCallCheck3.default)(this, Tooltip);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.apply(this, arguments));
  }

  Tooltip.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        left = _props.left,
        top = _props.top,
        content = _props.content,
        position = _props.position,
        inline = _props.inline,
        size = _props.size;


    return _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(_styles2.default.tooltip, _styles2.default[position], _styles2.default['size_' + size], (_classNames = {}, _classNames[_styles2.default.inline] = inline, _classNames)),
        style: { left: left, top: top }
      },
      content
    );
  };

  return Tooltip;
}(_ThemedComponent3.default);

Tooltip.propTypes = {
  content: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  left: _react.PropTypes.number,
  /** For displaying a plain, independent tooltip  */
  position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  size: _react.PropTypes.oneOf(['default', 'medium', 'large']),
  top: _react.PropTypes.number
};
Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: 'top',
  inline: false,
  size: 'default'
};
exports.default = Tooltip;