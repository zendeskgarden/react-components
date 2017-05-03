'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelConfig = function (_Component) {
  (0, _inherits3.default)(PanelConfig, _Component);

  function PanelConfig() {
    (0, _classCallCheck3.default)(this, PanelConfig);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  PanelConfig.prototype.render = function render() {
    return null;
  };

  return PanelConfig;
}(_react.Component);

PanelConfig.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node.isRequired,
  title: _propTypes2.default.string,
  /** <a href="#view">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
exports.default = PanelConfig;