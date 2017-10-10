import _extends from "babel-runtime/helpers/extends";
import _objectWithoutProperties from "babel-runtime/helpers/objectWithoutProperties";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ReactSingleSelectionModel from "../utils/selection/ReactSingleSelectionModel";
import View from "../core/View";
import RelativePositionedPopup from "../core/RelativePositionedPopup";

import Container from "./Container";
import Item from "./Item";
import LinkItem from "./LinkItem";
import Separator from "./Separator";

import styles from "./styles";

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      var children = nextProps.children;

      _this.setSelectableItems(children);
    };

    _this.onSelectionChanged = function () {
      var items = _this.selectionModel.items;
      _this.setState({ items: items });
      _this.showMenu();
    };

    _this.onValueChosen = function (value, event) {
      var onChange = _this.props.onChange;

      _this.closeMenu();
      onChange && onChange(value, event);
    };

    _this.showMenu = function () {
      var onOpen = _this.props.onOpen;


      if (_this.state.hidden) {
        _this.setState({ hidden: false }, function () {
          onOpen && onOpen();
        });
      }
    };

    _this.closeMenu = function (e) {
      var onClose = _this.props.onClose;


      _this.selectionModel.clear();
      _this.setState({ hidden: true }, function () {
        onClose && onClose();
      });
      e && e.stopPropagation();
    };

    _this.toggleHidden = function (e) {
      if (_this.state.hidden) {
        _this.showMenu();
      } else {
        _this.closeMenu();
      }
      e && e.stopPropagation();
    };

    _this.keyboardToggleHidden = function (e) {
      if (!_this.selectionModel.hasSelection()) {
        _this.toggleHidden();
        e.preventDefault();
        e.stopPropagation();
      }
    };

    _this.selectionModel = new ReactSingleSelectionModel();
    _this.selectionModel.onSelectionChanged = _this.onSelectionChanged;
    _this.selectionModel.onValueChosen = _this.onValueChosen;
    _this.state = {
      hidden: true,
      items: []
    };
    return _this;
  }

  Menu.prototype.setSelectableItems = function setSelectableItems(children) {
    this.selectionModel.items = children;
    this.setState({ items: this.selectionModel.items });
  };

  Menu.prototype.componentWillMount = function componentWillMount() {
    var children = this.props.children;

    this.setSelectableItems(children);
  };

  Menu.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        arrow = _props.arrow,
        dir = _props.dir,
        centerArrow = _props.centerArrow,
        marginBottom = _props.marginBottom,
        marginLeft = _props.marginLeft,
        marginRight = _props.marginRight,
        marginTop = _props.marginTop,
        positioning = _props.positioning,
        trigger = _props.trigger,
        testId = _props.testId,
        stretched = _props.stretched,
        other = _objectWithoutProperties(_props, ["arrow", "dir", "centerArrow", "marginBottom", "marginLeft", "marginRight", "marginTop", "positioning", "trigger", "testId", "stretched"]);

    var _state = this.state,
        hidden = _state.hidden,
        items = _state.items;


    var anchor = React.createElement(
      View,
      {
        className: classNames((_classNames = {}, _classNames[styles.stretched] = stretched, _classNames)),
        onKeyDown: this.selectionModel.handleKeyDown,
        onBlur: this.closeMenu,
        onClick: this.toggleHidden,
        onEnter: this.keyboardToggleHidden,
        onEscape: this.closeMenu,
        onSpace: this.keyboardToggleHidden
      },
      typeof trigger === "function" ? trigger({ open: !hidden }) : trigger
    );

    var arrowMargin = arrow ? 3 : 0;

    var centerPoint = centerArrow ? 19 : null;

    return React.createElement(
      RelativePositionedPopup,
      {
        anchor: anchor,
        centerPoint: centerPoint,
        dir: dir,
        hidden: hidden,
        positioning: positioning,
        marginTop: marginTop + arrowMargin,
        marginLeft: marginLeft + arrowMargin,
        marginRight: marginRight + arrowMargin,
        marginBottom: marginBottom + arrowMargin,
        stretched: stretched,
        testId: testId
      },
      function (position) {
        return React.createElement(
          Container,
          _extends({}, other, {
            animate: !hidden,
            dir: dir,
            arrow: arrow,
            position: position
          }),
          items
        );
      }
    );
  };

  return Menu;
}(Component);

Menu.propTypes = {
  arrow: PropTypes.bool,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
  centerArrow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  fixedWidth: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** <a href="#relativepositionedpopup">See RelativePositionedPopup</a> */
  positioning: RelativePositionedPopup.propTypes.positioning,
  size: PropTypes.oneOf(["small", "medium"]),
  stretched: PropTypes.bool,
  testId: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  wide: PropTypes.bool
};
Menu.defaultProps = {
  arrow: false,
  dir: "ltr",
  centerArrow: false,
  marginBottom: 2,
  marginLeft: 2,
  marginRight: 2,
  marginTop: 2,
  positioning: ["bottom_right", "top_right"],
  stretched: false,
  size: "medium",
  wide: false
};
Menu.Container = Container;
Menu.Item = Item;
Menu.LinkItem = LinkItem;
Menu.Separator = Separator;
export default Menu;