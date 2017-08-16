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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require("react-dom");

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _Tooltip = require("../../../Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _getBestRelativePlacement = require("../../positioning/getBestRelativePlacement");

var _getBestRelativePlacement2 = _interopRequireDefault(_getBestRelativePlacement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rtlPositions = {
  top: "top",
  bottom: "bottom",
  left: "right",
  right: "left"
};

var TooltipContainer = function (_Component) {
  (0, _inherits3.default)(TooltipContainer, _Component);

  function TooltipContainer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TooltipContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.container = document.createElement("div");
      _this.container.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
      _this.container.style.position = "absolute";
      _this.container.style.visibility = "hidden";
      _this.container.style.top = "0px";
      _this.container.style.left = "0px";
      _this.container.style.width = "100%";
      document.body.appendChild(_this.container);
    }, _this.componentWillReceiveProps = function (_ref) {
      var content = _ref.content,
          size = _ref.size;

      if (!content) {
        _this.setState({ tooltipBounds: null });

        return null;
      }

      // Render an invisible tooltip into the DOM in order to analyze its dimensions,
      // so we know exactly how to place it correctly when we render it.
      (0, _reactDom.render)(_react2.default.createElement(
        _Tooltip2.default,
        { size: size },
        content
      ), _this.container, function () {
        var tooltipBounds = _this.container.firstElementChild.getBoundingClientRect();

        _this.setState({ tooltipBounds: tooltipBounds });
      });
    }, _this.render = function () {
      if (!(_this.state && _this.state.tooltipBounds)) {
        return null;
      }

      var tBounds = _this.state.tooltipBounds;
      var _this$props = _this.props,
          content = _this$props.content,
          anchor = _this$props.anchor,
          rawPositions = _this$props.positions,
          dir = _this$props.dir,
          size = _this$props.size,
          zIndex = _this$props.zIndex;


      var positions = function () {
        return typeof rawPositions === "string" ? [rawPositions] : rawPositions;
      }().map(function (position) {
        return dir === "rtl" ? rtlPositions[position] : position;
      });

      var aBounds = anchor.getBoundingClientRect();

      var _getBestRelativePlace = (0, _getBestRelativePlacement2.default)({
        positions: positions,
        anchor: {
          left: aBounds.left,
          right: aBounds.right,
          top: aBounds.top,
          bottom: aBounds.bottom,
          width: aBounds.width,
          height: aBounds.height,
          margins: { left: 5, top: 5, right: 5, bottom: 5 }
        },
        centerPoint: 0,
        target: {
          width: tBounds.width,
          height: tBounds.height
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }),
          _getBestRelativePlace2 = _getBestRelativePlace.rect,
          left = _getBestRelativePlace2.left,
          top = _getBestRelativePlace2.top,
          position = _getBestRelativePlace.position;

      return _react2.default.createElement(
        "div",
        { className: _styles2.default.container, style: { zIndex: zIndex } },
        _react2.default.createElement(
          _Tooltip2.default,
          { left: left, top: top, position: position, size: size },
          content
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return TooltipContainer;
}(_react.Component);

TooltipContainer.propTypes = {
  positions: _propTypes2.default.oneOfType([_Tooltip2.default.propTypes.position, _propTypes2.default.arrayOf(_Tooltip2.default.propTypes.position)]),
  content: _Tooltip2.default.propTypes.children,
  anchor: _propTypes2.default.object,
  dir: _propTypes2.default.oneOf(["rtl", "ltr"]),
  size: _Tooltip2.default.propTypes.size,
  zIndex: _propTypes2.default.number
};

TooltipContainer.defaultProps = {
  positions: ["top", "bottom", "left", "right"],
  dir: "ltr",
  zIndex: 600
};

exports.default = TooltipContainer;