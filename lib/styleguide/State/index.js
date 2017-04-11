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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var State = function (_Component) {
  (0, _inherits3.default)(State, _Component);

  function State(props) {
    (0, _classCallCheck3.default)(this, State);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = (0, _extends3.default)({}, props.initialState);
    return _this;
  }

  State.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        initialState = _props.initialState;


    return children(this.state || initialState, this.setState.bind(this));
  };

  return State;
}(_react.Component);

State.propTypes = {
  children: _propTypes2.default.func,
  initialState: _propTypes2.default.object
};
State.defaultProps = {
  initialState: {}
};
exports.default = State;