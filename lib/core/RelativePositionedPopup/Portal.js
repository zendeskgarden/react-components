"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contextTypes = {
  rcTheme: _propTypes2.default.object,
  tooltips: _propTypes2.default.object
};

var ForwardContext = function (_Component) {
  (0, _inherits3.default)(ForwardContext, _Component);

  function ForwardContext() {
    (0, _classCallCheck3.default)(this, ForwardContext);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ForwardContext.prototype.getChildContext = function getChildContext() {
    return this.props.context;
  };

  ForwardContext.prototype.render = function render() {
    return this.props.children;
  };

  return ForwardContext;
}(_react.Component);

ForwardContext.propTypes = {
  children: _propTypes2.default.node,
  context: _propTypes2.default.object.isRequired
};
ForwardContext.childContextTypes = contextTypes;

var Portal = function (_Component2) {
  (0, _inherits3.default)(Portal, _Component2);

  function Portal() {
    (0, _classCallCheck3.default)(this, Portal);
    return (0, _possibleConstructorReturn3.default)(this, _Component2.apply(this, arguments));
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


    (0, _reactDom.render)(_react2.default.createElement(
      ForwardContext,
      { context: this.context },
      children
    ), this.relativelyPositionedGroup);
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node
};
Portal.contextTypes = contextTypes;
exports.default = Portal;