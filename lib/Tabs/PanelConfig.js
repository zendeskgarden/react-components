'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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
  children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),
  disabled: _react.PropTypes.bool,
  id: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.node.isRequired,
  title: _react.PropTypes.string,
  /** <a href="#View">See View</a> */
  tooltipPositioning: function tooltipPositioning() {}
};
exports.default = PanelConfig;