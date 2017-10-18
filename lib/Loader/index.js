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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

var _dots100x85Aluminum = require("./assets/dots.100x85.aluminum.gif");

var _dots100x85Aluminum2 = _interopRequireDefault(_dots100x85Aluminum);

var _dots100x85Pelorous = require("./assets/dots.100x85.pelorous.gif");

var _dots100x85Pelorous2 = _interopRequireDefault(_dots100x85Pelorous);

var _spinner100x100Aluminum = require("./assets/spinner.100x100.aluminum.gif");

var _spinner100x100Aluminum2 = _interopRequireDefault(_spinner100x100Aluminum);

var _spinner100x100Pelorous = require("./assets/spinner.100x100.pelorous.gif");

var _spinner100x100Pelorous2 = _interopRequireDefault(_spinner100x100Pelorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function (_ThemedComponent) {
  (0, _inherits3.default)(Loader, _ThemedComponent);

  function Loader(props, context) {
    (0, _classCallCheck3.default)(this, Loader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Loader",
      styles: _styles2.default
    }));

    _this.retrieveLoader = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          color = _this$props.color;


      if (type === "dots") {
        return color === "aluminum" ? _dots100x85Aluminum2.default : _dots100x85Pelorous2.default;
      }

      return color === "aluminum" ? _spinner100x100Aluminum2.default : _spinner100x100Pelorous2.default;
    };

    return _this;
  }

  Loader.prototype.render = function render() {
    var _props = this.props,
        alt = _props.alt,
        className = _props.className,
        size = _props.size,
        testId = _props.testId;
    var theme = this.theme;

    var loaderSrc = this.retrieveLoader();

    return _react2.default.createElement("img", {
      className: (0, _classnames2.default)(theme.loader, className),
      src: loaderSrc,
      width: size,
      alt: alt,
      title: alt,
      "data-test-id": testId
    });
  };

  return Loader;
}(_ThemedComponent3.default);

Loader.propTypes = {
  /**
     * The alt value to be applied to the GIF
     */
  alt: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["aluminum", "pelorous"]),
  testId: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(["dots", "spinner"]),
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
Loader.defaultProps = {
  alt: "Loading",
  color: "pelorous",
  type: "dots",
  size: 50
};
exports.default = Loader;