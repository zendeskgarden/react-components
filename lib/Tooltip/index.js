'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(_ref) {
  var _classNames;

  var left = _ref.left,
      top = _ref.top,
      content = _ref.content,
      position = _ref.position,
      inline = _ref.inline;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(_styles2.default.tooltip, _styles2.default[position], (_classNames = {}, _classNames[_styles2.default.inline] = inline, _classNames)),
      style: { left: left, top: top }
    },
    content
  );
};

Tooltip.propTypes = {
  position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  top: _react.PropTypes.number,
  left: _react.PropTypes.number,
  /** For displaying a plain, independent tooltip  */
  inline: _react.PropTypes.bool
};

Tooltip.defaultProps = {
  top: 0,
  left: 0,
  position: 'top',
  inline: false
};

exports.default = Tooltip;