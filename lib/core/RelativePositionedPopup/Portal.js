"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _reactDom = require("react-dom");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portal = function (_Component) {
  (0, _inherits3.default)(Portal, _Component);

  function Portal() {
    (0, _classCallCheck3.default)(this, Portal);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    /**
     * Append RelativePositionGroup element to body to allow visibility
     * within overflow:hidden parents
     */
    var positionedGroup = document.createElement("div");
    document.body.appendChild(positionedGroup);

    this.relativelyPositionedGroup = positionedGroup;
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    document.body.removeChild(this.relativelyPositionedGroup);
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    var children = this.props.children;

    (0, _reactDom.render)(children, this.relativelyPositionedGroup);
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Portal;