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

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Heavily inspired by https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js

var isReact16 = _reactDom2.default.createPortal !== undefined;
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

var Portal = function (_Component) {
  (0, _inherits3.default)(Portal, _Component);

  function Portal() {
    (0, _classCallCheck3.default)(this, Portal);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Portal.prototype.componentWillMount = function componentWillMount() {
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
  };

  Portal.prototype.componentDidMount = function componentDidMount() {
    !isReact16 && createPortal(this, this.props.children, this.node);
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    !isReact16 && createPortal(this, newProps.children, this.node);
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.node) return;

    !isReact16 && _reactDom2.default.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  };

  Portal.prototype.render = function render() {
    if (isReact16) {
      return createPortal(this.props.children, this.node);
    } else {
      return null;
    }
  };

  return Portal;
}(_react.Component);

Portal.propTypes = {
  children: _propTypes2.default.node
};
exports.default = Portal;