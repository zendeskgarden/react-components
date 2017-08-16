"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createTooltipManager = require("../createTooltipManager");

var _createTooltipManager2 = _interopRequireDefault(_createTooltipManager);

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TooltipProvider = function (_Component) {
  (0, _inherits3.default)(TooltipProvider, _Component);

  function TooltipProvider(props) {
    (0, _classCallCheck3.default)(this, TooltipProvider);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.id = props.id || "tooltips-" + _uuid2.default.v4();
    return _this;
  }

  TooltipProvider.prototype.componentWillMount = function componentWillMount() {
    var container = document.getElementById(this.id);

    if (!container) {
      container = document.createElement("div");
      container.id = this.id;
      document.body.appendChild(container);
    }

    var _props = this.props,
        dir = _props.dir,
        zIndex = _props.zIndex;


    this.tooltipManager = (0, _createTooltipManager2.default)(container, { dir: dir, zIndex: zIndex });
  };

  TooltipProvider.prototype.getChildContext = function getChildContext() {
    return { tooltips: this.tooltipManager };
  };

  TooltipProvider.prototype.render = function render() {
    var children = this.props.children;


    return children;
  };

  return TooltipProvider;
}(_react.Component);

TooltipProvider.propTypes = {
  children: _propTypes2.default.node,
  /** Used to identify the provider and the element that will contain the tooltips. Defaults to a generated UUID */
  id: _propTypes2.default.string,
  dir: _propTypes2.default.oneOf(["rtl", "ltr"]),
  zIndex: _propTypes2.default.number
};
TooltipProvider.defaultProps = {
  dir: "ltr",
  zIndex: 600
};
TooltipProvider.childContextTypes = {
  tooltips: _propTypes2.default.object
};
exports.default = TooltipProvider;