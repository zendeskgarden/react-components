import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import _Array$from from "babel-runtime/core-js/array/from";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { findDOMNode } from "react-dom";
import FocusJail from "../../utils/FocusJail";

import View from "../View";
import getBestRelativePlacement from "../../utils/positioning/getBestRelativePlacement";
import toFixedOffset from "../../utils/positioning/toFixedOffset";
import styles from "./styles";

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

  var iframeDocuments = _Array$from(iframes).filter(isIFrameOfCurrentOrigin).map(function (iframe) {
    return iframe.contentDocument;
  });

  return [document].concat(iframeDocuments);
};

var RelativePositionedPopup = function (_Component) {
  _inherits(RelativePositionedPopup, _Component);

  function RelativePositionedPopup() {
    var _temp, _this, _ret;

    _classCallCheck(this, RelativePositionedPopup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.updatePlacement = function () {
      var hidden = _this.props.hidden;


      if (!hidden) {
        _this.anchorRect = _this.anchorElement.firstChild.getBoundingClientRect();
        _this.popupRect = _this.popupElement.firstChild.getBoundingClientRect();
        var placement = toFixedOffset(_this.getBestRelativePlacement(), _this.popupElement);
        _this.setState({
          placement: placement
        });
      }
    }, _this.clickOutsideHandler = function (e) {
      var _this$props = _this.props,
          hidden = _this$props.hidden,
          onClickOutside = _this$props.onClickOutside;


      var isLeftClick = e.which === 1;
      if (onClickOutside && !hidden && isLeftClick) {
        var target = e.target || document.elementFromPoint(e.pageX || e.clientX, e.pageY || e.clientY);
        var inSidePopup = _this.popupElement && _this.popupElement.contains(target);
        if (!inSidePopup) {
          setTimeout(function () {
            onClickOutside();
          }, 0);
        }
      }
    }, _this.getPositions = function () {
      var _this$props2 = _this.props,
          dir = _this$props2.dir,
          positioning = _this$props2.positioning;


      var positions = Array.isArray(positioning) ? positioning : [positioning];

      return dir === "rtl" ? positions.map(function (position) {
        return rtlMapping[position] || position;
      }) : positions;
    }, _this.getAnchorMargins = function () {
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
    }, _this.getBestRelativePlacement = function () {
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

      var bestPlacement = getBestRelativePlacement({
        positions: _this.getPositions(),
        anchor: anchorRect,
        centerPoint: centerPoint,
        target: target,
        viewport: viewport
      });

      return bestPlacement;
    }, _this.onTab = function (e) {
      _this.tabJail && _this.tabJail.onTab(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
      this.tabJail = trapFocus && new FocusJail(this.popupElement);
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
        hidden = _props2.hidden,
        testId = _props2.testId,
        stretched = _props2.stretched;

    var _ref = this.state || {},
        opening = _ref.opening,
        placement = _ref.placement;

    var popupStyle = placement ? {
      visibility: "visible",
      top: placement.rect.top + "px",
      left: placement.rect.left + "px",
      height: placement.rect.height + "px",
      width: placement.rect.width + "px"
    } : { visibility: "hidden" };

    var position = placement ? placement.position : this.getPositions()[0];

    return React.createElement(
      View,
      {
        className: classNames(styles.container, (_classNames = {}, _classNames[styles.stretched] = stretched, _classNames)),
        testId: testId
      },
      React.createElement(
        View,
        {
          className: classNames(styles.trigger, (_classNames2 = {}, _classNames2[styles.stretched] = stretched, _classNames2)),
          ref: function ref(_ref2) {
            _this5.anchorElement = _this5.anchorElement || findDOMNode(_ref2);
          }
        },
        anchor
      ),
      React.createElement(
        View,
        {
          className: classNames(styles.popup, (_classNames3 = {}, _classNames3[styles.opening] = opening, _classNames3)),
          hidden: hidden,
          onTab: this.onTab,
          style: popupStyle,
          ref: function ref(_ref3) {
            _this5.popupElement = _this5.popupElement || findDOMNode(_ref3);
          }
        },
        hidden ? null : typeof children === "function" ? children(position) : children
      )
    );
  };

  return RelativePositionedPopup;
}(Component);

RelativePositionedPopup.propTypes = {
  anchor: PropTypes.node.isRequired,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  hidden: PropTypes.bool,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  centerPoint: PropTypes.number,
  positioning: PropTypes.oneOfType([PropTypes.oneOf(positions), PropTypes.arrayOf(PropTypes.oneOf(positions))]).isRequired,
  testId: PropTypes.string,
  trapFocus: PropTypes.bool,
  stretched: PropTypes.bool,
  onClickOutside: PropTypes.func
};
RelativePositionedPopup.defaultProps = {
  dir: "ltr",
  hidden: true,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  trapFocus: false
};


export default RelativePositionedPopup;