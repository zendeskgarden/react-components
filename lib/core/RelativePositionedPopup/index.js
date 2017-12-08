"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require("react-dom");

var _uuid = require("uuid");

var _uuid2 = _interopRequireDefault(_uuid);

var _Portal = require("../../utils/Portal");

var _Portal2 = _interopRequireDefault(_Portal);

var _FocusJail = require("../../utils/FocusJail");

var _FocusJail2 = _interopRequireDefault(_FocusJail);

var _View = require("../View");

var _View2 = _interopRequireDefault(_View);

var _getBestRelativePlacement = require("../../utils/positioning/getBestRelativePlacement");

var _getBestRelativePlacement2 = _interopRequireDefault(_getBestRelativePlacement);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var positions = ["bottom", "bottom_stretch", "bottom_left", "bottom_right", "left", "left_top", "left_bottom", "right", "right_top", "right_bottom", "top", "top_stretch", "top_left", "top_right"];

var rtlMapping = {
  bottom_right: "bottom_left",
  bottom_left: "bottom_right",
  left: "right",
  left_top: "right_top",
  left_bottom: "right_bottom",
  right: "left",
  right_top: "left_top",
  right_bottom: "left_bottom",
  top_left: "top_right",
  top_right: "top_left"
};

var getCurrentOrigin = function getCurrentOrigin() {
  var location = window.location;
  var origin = location.origin || location.protocol + "//" + location.host;

  return origin;
};

var isIFrameOfCurrentOrigin = function isIFrameOfCurrentOrigin(iframe) {
  var origin = getCurrentOrigin();
  return !iframe.src || iframe.src.indexOf(origin) === 0;
};

var getDocuments = function getDocuments() {
  var iframes = document.querySelectorAll("iframe");

  var iframeDocuments = (0, _from2.default)(iframes).filter(isIFrameOfCurrentOrigin).map(function (iframe) {
    return iframe.contentDocument;
  });

  return [document].concat(iframeDocuments);
};

var RelativePositionedPopup = function (_Component) {
  (0, _inherits3.default)(RelativePositionedPopup, _Component);

  function RelativePositionedPopup(props, context) {
    (0, _classCallCheck3.default)(this, RelativePositionedPopup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.updatePlacement = function () {
      var hidden = _this.props.hidden;


      if (!hidden) {
        _this.anchorRect = _this.anchorElement.firstChild.getBoundingClientRect();
        _this.popupRect = _this.popupElement.firstChild.getBoundingClientRect();
        var placement = _this.getBestRelativePlacement();
        _this.setState({
          placement: placement
        });
      }
    };

    _this.clickOutsideHandler = function (e) {
      var _this$props = _this.props,
          hidden = _this$props.hidden,
          onClickOutside = _this$props.onClickOutside;


      var isLeftClick = e.which === 1;
      if (onClickOutside && !hidden && isLeftClick) {
        var target = e.target || document.elementFromPoint(e.pageX || e.clientX, e.pageY || e.clientY);

        var elementIds = (0, _from2.default)(_this.popupElement.querySelectorAll("[aria-owns]")).map(function (element) {
          return element.getAttribute("aria-owns");
        });

        var insidePopup = _this.popupElement && _this.popupElement.contains(target) || elementIds.some(function (id) {
          var element = document.getElementById(id);
          return element && element.contains(target);
        });

        if (!insidePopup) {
          setTimeout(function () {
            onClickOutside();
          }, 0);
        }
      }
    };

    _this.getPositions = function () {
      var _this$props2 = _this.props,
          dir = _this$props2.dir,
          positioning = _this$props2.positioning;


      var positions = Array.isArray(positioning) ? positioning : [positioning];

      return dir === "rtl" ? positions.map(function (position) {
        return rtlMapping[position] || position;
      }) : positions;
    };

    _this.getAnchorMargins = function () {
      var _this$props3 = _this.props,
          marginBottom = _this$props3.marginBottom,
          marginLeft = _this$props3.marginLeft,
          marginRight = _this$props3.marginRight,
          marginTop = _this$props3.marginTop;


      return {
        bottom: marginBottom,
        left: marginLeft,
        right: marginRight,
        top: marginTop
      };
    };

    _this.getBestRelativePlacement = function () {
      var viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      var anchorRect = {
        top: _this.anchorRect.top,
        left: _this.anchorRect.left,
        width: _this.anchorRect.width,
        height: _this.anchorRect.height,
        margins: _this.getAnchorMargins()
      };

      var centerPoint = _this.props.centerPoint;


      var target = {
        top: _this.popupRect.top,
        left: _this.popupRect.left,
        width: _this.popupRect.width,
        height: _this.popupRect.height
      };

      var bestPlacement = (0, _getBestRelativePlacement2.default)({
        positions: _this.getPositions(),
        anchor: anchorRect,
        centerPoint: centerPoint,
        target: target,
        viewport: viewport
      });

      return bestPlacement;
    };

    _this.onTab = function (e) {
      _this.tabJail && _this.tabJail.onTab(e);
    };

    _this.popupId = _uuid2.default.v4();
    return _this;
  }

  RelativePositionedPopup.prototype.componentWillMount = function componentWillMount() {
    setTimeout(this.updatePlacement, 0);
  };

  RelativePositionedPopup.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    window.addEventListener("resize", this.updatePlacement);
    window.addEventListener("scroll", this.updatePlacement, true);

    getDocuments().forEach(function (doc) {
      doc.addEventListener("click", _this2.clickOutsideHandler, true);
    });
  };

  RelativePositionedPopup.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    window.removeEventListener("resize", this.updatePlacement);
    window.removeEventListener("scroll", this.updatePlacement, true);

    getDocuments().forEach(function (doc) {
      doc.removeEventListener("click", _this3.clickOutsideHandler, true);
    });
  };

  RelativePositionedPopup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this4 = this;

    var _props = this.props,
        hidden = _props.hidden,
        trapFocus = _props.trapFocus;


    if (hidden && !nextProps.hidden) {
      this.tabJail = trapFocus && new _FocusJail2.default(this.popupElement);
      this.setState({ opening: true });
      setTimeout(function () {
        _this4.setState({ opening: false });
        _this4.updatePlacement();
      }, 0);
    } else if (!hidden && nextProps.hidden) {
      this.setState({ placement: null });
    } else {
      setTimeout(function () {
        _this4.updatePlacement();
      }, 0);
    }
  };

  RelativePositionedPopup.prototype.render = function render() {
    var _classNames,
        _classNames2,
        _this5 = this,
        _classNames3;

    var _props2 = this.props,
        anchor = _props2.anchor,
        children = _props2.children,
        dir = _props2.dir,
        hidden = _props2.hidden,
        testId = _props2.testId,
        stretched = _props2.stretched,
        zIndex = _props2.zIndex;

    var _ref = this.state || {},
        opening = _ref.opening,
        placement = _ref.placement;

    var popupStyle = placement ? {
      visibility: "visible",
      top: placement.rect.top + "px",
      left: placement.rect.left + "px",
      height: placement.rect.height + "px",
      width: placement.rect.width + "px",
      zIndex: zIndex
    } : { visibility: "hidden" };

    var position = placement ? placement.position : this.getPositions()[0];

    return _react2.default.createElement(
      _View2.default,
      {
        className: (0, _classnames2.default)(_styles2.default.container, (_classNames = {}, _classNames[_styles2.default.stretched] = stretched, _classNames)),
        dir: dir,
        testId: testId
      },
      _react2.default.createElement(
        _View2.default,
        {
          "aria-haspopup": !hidden,
          "aria-owns": this.popupId,
          className: (0, _classnames2.default)(_styles2.default.trigger, (_classNames2 = {}, _classNames2[_styles2.default.stretched] = stretched, _classNames2)),
          ref: function ref(_ref2) {
            _this5.anchorElement = _this5.anchorElement || (0, _reactDom.findDOMNode)(_ref2);
          }
        },
        anchor
      ),
      _react2.default.createElement(
        _Portal2.default,
        null,
        _react2.default.createElement(
          _View2.default,
          {
            className: (0, _classnames2.default)(_styles2.default.popup, (_classNames3 = {}, _classNames3[_styles2.default.opening] = opening, _classNames3[_styles2.default.stretched] = stretched, _classNames3)),
            dir: dir,
            hidden: hidden,
            id: this.popupId,
            onTab: this.onTab,
            style: popupStyle,
            ref: function ref(_ref3) {
              _this5.popupElement = _this5.popupElement || (0, _reactDom.findDOMNode)(_ref3);
            },
            testId: testId && testId + "-popup"
          },
          hidden ? null : typeof children === "function" ? children(position) : children
        )
      )
    );
  };

  return RelativePositionedPopup;
}(_react.Component);

RelativePositionedPopup.propTypes = {
  anchor: _propTypes2.default.node.isRequired,
  dir: _propTypes2.default.oneOf(["ltr", "rtl"]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  hidden: _propTypes2.default.bool,
  marginBottom: _propTypes2.default.number,
  marginLeft: _propTypes2.default.number,
  marginRight: _propTypes2.default.number,
  marginTop: _propTypes2.default.number,
  centerPoint: _propTypes2.default.number,
  positioning: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(positions), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(positions))]).isRequired,
  testId: _propTypes2.default.string,
  trapFocus: _propTypes2.default.bool,
  stretched: _propTypes2.default.bool,
  onClickOutside: _propTypes2.default.func,
  zIndex: _propTypes2.default.number
};
RelativePositionedPopup.defaultProps = {
  dir: "ltr",
  hidden: true,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  trapFocus: false,
  zIndex: 500
};
exports.default = RelativePositionedPopup;